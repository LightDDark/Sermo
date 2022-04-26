function PrintLog({ userName, log }) {
  const messages = log.getMessages().map((msg, index) => {
    const classer =
      msg.user === userName ? "Container Mine" : "Container Other";
    const timer = msg.date.getHours() + ":" + msg.date.getMinutes();
    return (
      <div class={classer}>
        {msg.content}
        <span class="time-right">{timer}</span>
      </div>
    );
  });
  return messages;
}

export default PrintLog;
