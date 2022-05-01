import { Card, Row } from "react-bootstrap";

function ContactCard(props) {
  const contact = props.contact;

  return (
    <Card as={Row}>
      <Card.Body>
        <Card.Title>{contact.getNickName()}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {contact.isOnline() ? "Online" : "Offline"}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
