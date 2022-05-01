import {
  Button,
  Form,
  Col,
  Popover,
  OverlayTrigger,
  Stack,
} from "react-bootstrap";
import { useRef, useState } from "react";
import UploadImage from "./UploadImage";
import UploadVideo from "./UploadVideo";
import "./image.css";
import RecordAudio from "./RecordAudio";

function MessageForm(props) {
  const [activeContact, setActiveContact] = props.active;
  const log = activeContact[1];
  const cont = activeContact[0];
  const userName = props.userName;
  const [type, setType] = useState(null);

  const imageM = useRef();
  const videoM = useRef();
  const audioM = useRef();

  const [shouldUploadImage, setShouldUploadImage] = useState(false);
  const itsImageTime = function () {
    setShouldUploadImage(true);
  };
  const stopImageTime = function () {
    setShouldUploadImage(false);
  };
  const [shouldUploadVideo, setShouldUploadVideo] = useState(false);
  const itsVideoTime = function () {
    setShouldUploadVideo(true);
  };
  const [shouldUploadRecord, setShouldUploadRecord] = useState(false);
  const itsRecordTime = function () {
    setShouldUploadRecord(true);
  }

  const popover = (
      <Popover id="popover-basic">
        <Popover.Body>
          <Stack direction="horizontal" gap={2}>
            <label
                ref={imageM}
                className="imBut"
                htmlFor="actual-btn-im"
                onClick={itsImageTime}
                onChange={() => setType("image")}
            >
              Image
              {shouldUploadImage && (
                  <UploadImage
                      log={log}
                      active={[activeContact, setActiveContact]}
                      userName={userName}
                  />
              )}
              {stopImageTime}
            </label>
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
                      userName={userName}
                  />
              )}
            </label>
            <label
                data-toggle="collapse"
                ref={audioM}
                className="audBut"
                htmlFor="actual-btn-vid"
                onClick={itsRecordTime}
                onChange={() => setType("audio")}
            >
              Audio
              {shouldUploadRecord && (
                  <RecordAudio
                      active={[activeContact, setActiveContact]}
                      log={log}
                      userName={userName}
                  />
              )}
            </label>
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
                className="MsgInput"
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
