import "./subChat.css";
import PrintLog from "./PrintLog";
import { Row } from "react-bootstrap";

function SubChat(props) {
  const log = props.log;
  const userName = props.userName;
  const description = function () {
    if (log && log.getMessages().length) {
      return <PrintLog log={log} userName={userName} />;
    }
    return <h6 className="message">no messages</h6>;
  };

  return <Row className="chat">{description()}</Row>;
}
export default SubChat;
