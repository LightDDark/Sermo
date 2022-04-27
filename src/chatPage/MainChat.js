import SubChat from "./SubChat";
import SideBar from "./SideBar";

import User from "../dataBase/User";
import { useState, useRef } from "react";
import "./subChat.css";

function MainChat(props) {
  const user = props.user;
  const nullUser = new User("", "", "");
  const [activeContact, setActiveContact] = useState([nullUser, null]);
  const message = useRef(null);
  const sendTextMessage = function (type) {
    if (activeContact[1]) {
      const msg = message.current.value;
      activeContact[1].newMessage(type, msg, user);
    }
  };

  return (
    <div className="container">
      <h1 className="h3 mb-3">Messages</h1>
      <div className="row">
        <div className="col-3">
          <h2>Contacts</h2>
          <SideBar
            contacts={user.getContacts()}
            active={[activeContact, setActiveContact]}
          />
        </div>
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{activeContact[0].getNickName()}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Online</h6>
            </div>
            <SubChat log={activeContact[1]} userName={user.getName()} />
            <div className="align-bottom">
              <input
                className="TypeBar"
                type="text"
                ref={message}
                placeholder={"type a message"}
              ></input>
              <button className="Send" onClick={() => sendTextMessage("text")}>
                send
              </button>
              <button
                type="button"
                className="Options"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="top"
                data-bs-content="Top popover"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainChat;
