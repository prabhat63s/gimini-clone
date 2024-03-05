import "./Main.css";
import { LuImagePlus, LuMic, LuSend } from "react-icons/lu";
import { useContext } from "react";
import { Context } from "../../context/Context";
import gemini from "../../assets/logo.webp";
import user from "../../assets/user.jpeg";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p className="">Main baba tillu</p>
        <img src={user} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Main baba tillu!</span>
              </p>
              <p className="bio">B.Tech from Kanpur.</p>
              <p>How can I help you today?</p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={gemini} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Apana question pucho."
            />
            <div className="">
              <LuImagePlus className="input-icon" />
              <LuMic className="input-icon" />
              {input ? (
                <LuSend className="input-icon" onClick={() => onSent()} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Hello, Main baba tillu! B.Tech from Kanpur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
