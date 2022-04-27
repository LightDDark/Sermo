import User from "./User";

class UserData {
  constructor() {
    const defaultUser1 = new User("maayanSh", "maayanSh", "maayanSh");
    const defaultUser2 = new User("orYe", "orYe", "orYe");

    this.users = new Map()
        .set(defaultUser1.getName(), defaultUser1.addContact(defaultUser2))
        .set(defaultUser2.getName(), defaultUser2.addContact(defaultUser1));
  }

  getUser(userName) {
    return this.users.get(userName);
  }

  addUser(userName, password, nickName) {
    if (this.users.has(userName)) {
      console.log("Error, userName already in use.");
    } else {
      const users = this.users;
      users.set(userName, new User(userName, password, nickName));
      this.users = users;
    }
  }

  login(userName, password) {
    console.log(userName, password);
    if (!this.users.has(userName)) {
      console.log("Error, userName not found.");
    } else if (this.users.get(userName).validatePass(password)) {
      console.log("Login Successful.");
    } else {
      console.log("Wrong Password!");
    }
  }
}

const users = new UserData();

export default users;