import User from "./User";

class UserData {
  constructor() {
    this.users = new Map();
  }

  addUser({ userName, password, nickName }) {
    if (this.state.users.has(userName)) {
      console.log("Error, userName already in use.");
    } else {
      const users = this.state.users;
      users.set(userName, new User(userName, password, nickName));
      this.setState({
        users: users,
      });
    }
  }

  login({ userName, password }) {
    console.log(userName, password);
    if (!this.state.users.has(userName)) {
      console.log("Error, userName not found.");
    } else if (
      this.state.users.get(userName).validatePass({ password: password })
    ) {
      console.log("Login Successful.");
    } else {
      console.log("Wrong Password!");
    }
  }
}

var users = new UserData();

export default users;
