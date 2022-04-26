import User from "./User";

class UserData {
  constructor() {
    this.users = new Map();
  }

  getUser(userName) {
    return this.users.get(userName);
  }
  addUser(userName, password, nickName) {
    if (this.users.has(userName)) {
      console.log("Error, userName already in use.");
    } else {
      const users = this.state.users;
      users.set(userName, new User(userName, password, nickName));
      this.users = users;
    }
  }

  login(userName, password) {
    console.log(userName, password);
    if (!this.users.has(userName)) {
      console.log("Error, userName not found.");
    } else if (this.users.get(userName).validatePass({ password: password })) {
      console.log("Login Successful.");
    } else {
      console.log("Wrong Password!");
    }
  }
}

const users = new UserData();

export default users;
