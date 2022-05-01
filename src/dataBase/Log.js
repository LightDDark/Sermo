import HandleContent from "./HandleContent";
import image from '../../src/files/simon.avif'
import recording from "../../src/files/simon.ogg"


// class to store chat logs
class Log {
  // gets the users in chat and if private chat or group
  constructor(userNames, isPrivate) {
    this.userNames = userNames;
    this.messages = [
      {
        type: "text",
        content: <HandleContent type={"text"} content={"I need you to wire me 300,000. maybe get second mortgage?"} />,
        user: "orYe",
        date: new Date(),
      },
      {
        type: "text",
        content: <HandleContent type={"text"} content={"my enemies are after me"} />,
        user: "orYe",
        date: new Date(),
      },
      {
        type: "image",
        content: <HandleContent type={"image"} content={image} />,
        user: "maayanSh",
        date: new Date(),
      },
      {
        type: "audio",
        content: <HandleContent type={"audio"} content={recording} />,
        user: "maayanSh",
        date: new Date(),
      },
    ];
    this.isPrivate = isPrivate;
  }

  newMessage(type, content, userName) {
    if (!this.userNames.includes(userName)) {
      return;
    }
    const handeledContent = <HandleContent type={type} content={content} />;
    const current = this.messages.slice().concat([
      {
        type: type,
        content: handeledContent,
        user: userName,
        date: new Date(),
      },
    ]);
    this.messages = current;
  }

  addUser(userName) {
    const current = this.userNames;
    if (this.isPrivate) {
      return;
    } else if (current.has(userName)) {
      console.log("User already in group");
    } else {
      current.add(userName);
      this.userNames = current;
      console.log(userName + "added to group");
    }
  }

  getUserNames() {
    return this.userNames;
  }

  getIsPrivate() {
    return this.isPrivate;
  }

  getMessages() {
    return this.messages.slice();
  }
}
export default Log;
