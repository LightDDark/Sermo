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
import "./image.css"

function MessageForm(props) {
  const log = props.log;
  const userName = props.userName;

  const [shouldUploadImage, setShouldUploadImage] = useState(false);
  const itsImageTime = function () {
    setShouldUploadImage(true);
  }
  const [shouldUploadVideo, setShouldUploadVideo] = useState(false);
  const itsVideoTime = function () {
    setShouldUploadVideo(true);
  }
  /* const [shouldUploadRecord, setShouldUploadRecord] = useState(false);
   const itsRecordTime = function () {
     setShouldUploadRecord(true);
   }*/
  
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Stack direction="horizontal" gap={2}>
          <label className="imBut" for="actual-btn-im" onClick={itsImageTime}>Image{
              shouldUploadImage && <UploadImage />
          }</label>
          <label className="vidBut" for="actual-btn-vid" onClick={itsVideoTime}>Video{
              shouldUploadVideo && <UploadVideo height={300}/>
          }</label>
{/*          <Button onClick={itsRecordTime}>Audio{
              shouldUploadRecord && <RecordAudio />
          }</Button>*/}
        </Stack>
      </Popover.Body>
    </Popover>
  );

  const textM = useRef(null);
  const [type, setType] = useState(null);

  const sendTextMessage = function () {
    if (log) {
      const msg = textM.current.value;
      log.newMessage(type, msg, userName);
      textM.current.value = '';
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
    <Form autocomplete="off" noValidate onSubmit={handleSubmit}>
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
