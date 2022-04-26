import HandleContent from "./HandleContent";

// class to store chat logs
class Log {
  // gets the users in chat and if private chat or group
  constructor(users, isPrivate,messages) {
    this.userSet = users;
    this.messages = messages;
    this.isPrivate = isPrivate;
  }

  newMessage(type, content, user) {
    const current = this.messages.slice();
    const handeledContent = <HandleContent type={type} content={content} />;
    current.concat([
      {
        type: type,
        content: handeledContent,
        user: user,
        date: new Date(),
      },
    ]);
    this.messages = current;
  }

  addContact({ userName }) {
    const current = this.userSet;
    if (this.isPrivate) {
      return;
    } else if (current.has(userName)) {
      console.log("User already in group");
    } else {
      current.add(userName);
      console.log(userName + "added to group");
    }
  }
}
export default Log;
