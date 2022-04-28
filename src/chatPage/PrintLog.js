import "./PrintLog.css";

function PrintLog(props) {
  const length = props.log.getMessages().length;
  const messages = props.log.getMessages().map((msg, index) => {
    const classer =
      msg.user === props.userName ? "Container Mine" : "Container Other";
    const timer = msg.date.getHours() + ":" + msg.date.getMinutes();
    return (
      <div className={classer} key={index}>
        <div className="box" key={index + length}>
          <div className="center" key={index + length + 1}>
            <div className="dialog-1" key={index + length + 2}>
              <div className="left-point" key={index + length + 3} />
              <div className="Mes" type="text" key={index + length + 4}>
                {msg.content.props.content}
              </div>
              <div className="timer" key={index + length + 5}>
                <span className="time-right" key={index + length + 6}>
                  {timer}
                </span>
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
