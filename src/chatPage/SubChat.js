import "./subChat.css";
import PrintLog from "./PrintLog";

function SubChat(props) {
  const log = props.log;
  const userName = props.userName;
  const desc =
    log && log.getMessages().length ? (
      <PrintLog log={log} userName={userName} />
    ) : (
      <h6 className="message">no new messages.</h6>
    );
  return <div className="chat">{desc}</div>;
}
export default SubChat;

//{props.logDB.render({userName:t})}
