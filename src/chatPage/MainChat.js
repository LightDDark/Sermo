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
          <SubChat log={activeContact} userName={user.getName()} />
          <MessageForm
            id="inside-card"
            active={[activeContact, setActiveContact]}
            userName={user.getName()}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default MainChat;