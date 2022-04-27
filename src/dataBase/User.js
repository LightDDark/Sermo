import Log from "./Log";
import logs from "./LogData";

class User {
  constructor(userName, password, nickName) {
    this.userName = userName;
    this.password = password;
    this.nickName = nickName;
    this.contacts = [];
  }

  validatePass(password) {
    return this.state.password === password;
  }

  addContact(user) {
    if (this.contacts.includes(user)) {
      console.log("Conntact already exists");
    } else {
      const current = this.contacts.slice().concat([user]);
      this.contacts = current;
      logs.addLog(new Log([this.getName(), user.getName()], true));
      console.log(user.getName() + " added succefuly.");
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
}

export default User;
