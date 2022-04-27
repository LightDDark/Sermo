import "./PrintLog.css"

function PrintLog(props) {
  const messages = props.log.getMessages().map((msg) => {
    const classer =
      msg.user === props.userName ? "Container Mine" : "Container Other";
    const timer = msg.date.getHours() + ":" + msg.date.getMinutes();
    console.log(msg);
    return (
      <div className={classer}>
        <div className="box">

          <div className="center">
            <div className="dialog-1">
              <div className="left-point"/>
              <text className="Mes" type="text">{msg.content.props.content}</text>
              <div className="timer"><span className="time-right">{timer}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return messages;
}

export default PrintLog;
