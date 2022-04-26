import React from "react";
import HandleContent from "./HandleContent";

// class to store chat logs
class Log extends React.Component {
  // gets the users in chat and if private chat or group
  constructor(users,isPrivate) {
    super(users,isPrivate);
    this.state = {
      userSet: new Set().add(users),
      messages: [],
      isPrivate: isPrivate,
    };
  }

  newMessage({ type, content, user }) {
    const current = this.state.messages.slice();
    const handeledContent = <HandleContent type={type} content={content} />;
    current.concat([
      {
        type: type,
        content: handeledContent,
        user: user,
        date: new Date(),
      },
    ]);
    this.setState({
      messages: current,
    });
  }

  addUser({ userName }) {
    const current = this.state.userSet;
    if (this.state.isPrivate) {
      return;
    } else if (current.has(userName)) {
      console.log("User already in group");
    } else {
      current.add(userName);
      console.log(userName + "added to group");
    }
  }

  render({ userName }) {
    const messages = this.state.messages.map((msg, index) => {
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
}
export default Log;