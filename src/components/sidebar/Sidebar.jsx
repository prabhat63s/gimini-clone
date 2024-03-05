import { useContext, useState } from "react";
import "./Sidebar.css";
// import logo from "../../assets/logo.webp";
import {
  MdOutlineAdd,
  MdOutlineHistory,
  MdOutlineMenu,
  MdOutlineMessage,
  MdOutlineSettings,
  MdQuestionMark,
} from "react-icons/md";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, seExtended] = useState(true);
  const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <MdOutlineMenu
          className="menu"
          size={20}
          onClick={() => seExtended((prev) => !prev)}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <MdOutlineAdd size={20} />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, i) => {
              return (
                <div className="recent-entry" key={i} onClick={() => loadPrompt(item)}>
                  <MdOutlineMessage size={20} />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <MdQuestionMark size={20} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <MdOutlineHistory size={20} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <MdOutlineSettings size={20} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
