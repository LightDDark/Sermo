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

  addContact(userName) {
    const current = this.state.contacts;
    if (current.has(userName)) {
      console.log("Conntact already exists");
    } else {
      current.add(userName);
      this.setState({
        contacts: current,
      });
      console.log(userName + "added succefuly.");
    }
  }

  getName() {
    return this.userName;
  }
}

export default User;
