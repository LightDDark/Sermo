import Log from "./Log";
import logs from "./LogData";

class User {
  constructor(userName, password, nickName) {
    this.userName = userName;
    this.password = password;
    this.nickName = nickName;
    this.online = false;
    this.contacts = [];
  }

  validatePass(password) {
    return this.password === password;
  }

  addContact(user) {
    if (!user) {
      console.log("user is indefined");
    } else if (this.contacts.includes(user)) {
      console.log("Conntact already exists");
    } else {
      const current = this.contacts.slice().concat([user]);
      this.contacts = current;
      logs.addLog(new Log([this.getName(), user.getName()], true));
    }
    return this;
  }

  getName() {
    return this.userName;
  }

  getNickName() {
    return this.nickName;
  }

  getContacts() {
    return this.contacts.slice();
  }

  isOnline() {
    return this.online;
  }

  setOnline(status) {
    this.online = status;
  }
}

export default User;
