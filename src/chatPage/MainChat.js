import SubChat from "./SubChat";
import SideBar from "./SideBar";
import ContactCard from "./ContactCard";
import MessageForm from "./MessageForm";
import Chat from "./Chat";

import User from "../dataBase/User";
import { useState } from "react";
import "./subChat.css";
import { Container, Row, Col } from "react-bootstrap";

function MainChat(props) {
  const user = props.user;
  const [activeContact, setActiveContact] = useState([null, null]);

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
        {activeContact[0] ? (
          <Chat active={[activeContact, setActiveContact]} user={user} />
        ) : (
          <Col className="p-3 mb-2 bg-secondary text-white"></Col>
        )}
      </Row>
    </Container>
  );
}
export default MainChat;
