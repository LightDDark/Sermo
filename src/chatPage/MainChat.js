import SubChat from "./SubChat";
import SideBar from "./SideBar";
import ContactCard from "./ContactCard";
import MessageForm from "./MessageForm";

import User from "../dataBase/User";
import { useState } from "react";
import "./subChat.css";
import { Container, Row, Col } from "react-bootstrap";

function MainChat(props) {
  const user = props.user;
  const nullUser = new User("", "", "");
  const [activeContact, setActiveContact] = useState([nullUser, null]);

  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <SideBar
            contacts={user.getContacts()}
            self={user}
            active={[activeContact, setActiveContact]}
          />
        </Col>
        <Col>
          <ContactCard contact={activeContact[0]} />
          <SubChat log={activeContact[1]} userName={user.getName()} />
          <MessageForm id="inside-card" log={activeContact[1]} userName={user.getName()}/>
        </Col>
      </Row>
    </Container>
  );
}
export default MainChat;

/*
<div className="container">
      <h1 className="h3 mb-3">Messages</h1>
      <div className="row">
        <div className="col-3">
          <h2>Contacts</h2>
          <SideBar
            contacts={user.getContacts()}
            user={user}
            active={[activeContact, setActiveContact]}
          />
        </div>
        <div className="col-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{activeContact[0].getNickName()}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {activeContact[0].isOnline() ? "Online" : "Offline"}
              </h6>
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
*/
