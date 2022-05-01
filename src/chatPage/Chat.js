import ContactCard from "./ContactCard";
import SubChat from "./SubChat";
import MessageForm from "./MessageForm";
import Col from "react-bootstrap/Col";

function Chat(props) {
  const [activeContact, setActiveContact] = props.active;
  const user = props.user;
  return (
    <Col>
      <ContactCard contact={activeContact[0]} />
      <SubChat log={activeContact} userName={user.getName()} />
      <MessageForm
        id="inside-card"
        active={[activeContact, setActiveContact]}
        userName={user.getName()}
      />
    </Col>
  );
}

export default Chat;
