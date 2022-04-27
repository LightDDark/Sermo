import { Button, Modal, Form } from "react-bootstrap";
import { useState, useRef } from "react";
import users from "../dataBase/UserData";

function ContactButton(props) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(true);
  const contact = useRef(null);
  const setContactList = props.setContactList;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = function (event) {
    event.preventDefault();
    const contactToAdd = users.getUser(contact.current.value);
    if (contactToAdd) {
      setValidated(true);
      props.user.addContact(contactToAdd);
      setContactList(props.user.getContacts());
      setShow(false);
    } else {
      setValidated(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add contact
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        onExited={() => setValidated(true)}
      >
        <Form onSubmit={handleAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Details</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                ref={contact}
                type="username"
                placeholder="Enter User Id"
                isInvalid={!validated}
                required
              />
              <Form.Control.Feedback type="invalid">
                User not found!
              </Form.Control.Feedback>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default ContactButton;
