import {
  Button,
  Form,
  Col,
  Popover,
  OverlayTrigger,
  Stack,
  Modal,
} from "react-bootstrap";
import { useRef, useState } from "react";
import UploadImage from "./UploadImage";
import UploadVideo from "./UploadVideo";
import "./image.css";

function MessageForm(props) {
  const [activeContact, setActiveContact] = props.active;
  const log = activeContact[1];
  const cont = activeContact[0];
  const userName = props.userName;
  const [type, setType] = useState(null);
  const [imUrl, setImUrl] = useState(null);
  const [show, setShow] = useState(false);
  const [chosenImage, setChosenImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const newImageMessage = function () {
    if (imUrl) {
      log.newMessage("image", imUrl, userName);
      setImUrl(null);
      setChosenImage(null);
      setActiveContact([activeContact[0], log]);
    }
  };

  const imageM = useRef();
  const videoM = useRef();
  const audioM = useRef();

  const [shouldUploadImage, setShouldUploadImage] = useState(false);
  const itsImageTime = function () {
    setShouldUploadImage(true);
  };
  const noImageTime = function () {
    setShouldUploadImage(false);
  };
  const [shouldUploadVideo, setShouldUploadVideo] = useState(false);
  const itsVideoTime = function () {
    setShouldUploadVideo(true);
  };
  /* const [shouldUploadRecord, setShouldUploadRecord] = useState(false);
   const itsRecordTime = function () {
     setShouldUploadRecord(true);
   }*/

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" onClick={handleShow}>
            Image
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label
                ref={imageM}
                className="imBut"
                htmlFor="actual-btn-im"
                onClick={itsImageTime}
                onChange={() => setType("image")}
              >
                Upload Image
                {shouldUploadImage && (
                  <UploadImage
                    log={log}
                    active={[activeContact, setActiveContact]}
                    userName={userName}
                    imUrl={[imUrl, setImUrl]}
                    chosenImage={[chosenImage, setChosenImage]}
                  />
                )}
                {noImageTime}
              </label>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              {imUrl && (
                <Button
                  variant="primary"
                  className="confirm-send-im"
                  onClick={newImageMessage}
                >
                  send image
                </Button>
              )}
            </Modal.Footer>
          </Modal>
          <label
            ref={videoM}
            className="vidBut"
            htmlFor="actual-btn-vid"
            onClick={itsVideoTime}
            onChange={() => setType("video")}
          >
            Video
            {shouldUploadVideo && (
              <UploadVideo
                height={300}
                active={[activeContact, setActiveContact]}
                log={log}
              />
            )}
          </label>
          {/*          <Button onClick={itsRecordTime}>Audio{
              shouldUploadRecord && <RecordAudio />
          }</Button>*/}
        </Stack>
      </Popover.Body>
    </Popover>
  );

  const textM = useRef(null);

  const sendTextMessage = function () {
    if (log) {
      const msg = textM.current.value;
      log.newMessage(type, msg, userName);
      setActiveContact([cont, log]);
      textM.current.value = "";
    }
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    if (!textM.current.value) {
      return;
    }
    sendTextMessage();
  };

  return (
    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Stack direction="horizontal">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <Button variant="secondary">Options</Button>
        </OverlayTrigger>

        <Form.Group
          className="col-xxl-10"
          as={Col}
          controlId="validationCustom01"
        >
          <Form.Control
            ref={textM}
            type="text"
            placeholder="Message"
            onChange={() => setType("text")}
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Send
        </Button>
      </Stack>
    </Form>
  );
}

export default MessageForm;
/*
function Example() {
  

  return (
    <>
      
    </>
  );
}

render(<Example />);
*/
