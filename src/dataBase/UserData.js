import User from "./User";

class UserData {
  constructor() {
    const defaultUser1 = new User("maayanSh", "maayanSh", "maayanSh");
    const defaultUser2 = new User("orYe", "orYe", "orYe");
    const defaultUser3 = new User("Rim", "Rim", "Rim");
    const defaultUser4 = new User("Nor", "Nor", "Nor");
    const defaultUser5 = new User("Sim", "Sim", "Sim");
    const defaultUser6 = new User("Tush", "Tush", "Tush");

    this.users = new Map()
      .set(
        defaultUser1.getName(),
        defaultUser1
          .addContact(defaultUser2)
          .addContact(defaultUser3)
          .addContact(defaultUser4)
          .addContact(defaultUser5)
          .addContact(defaultUser6)
      )
      .set(
        defaultUser2.getName(),
        defaultUser2
          .addContact(defaultUser1)
          .addContact(defaultUser3)
          .addContact(defaultUser4)
          .addContact(defaultUser5)
          .addContact(defaultUser6)
      )
      .set(
        defaultUser3.getName(),
        defaultUser3
          .addContact(defaultUser2)
          .addContact(defaultUser1)
          .addContact(defaultUser4)
          .addContact(defaultUser5)
          .addContact(defaultUser6)
      )
      .set(
        defaultUser4.getName(),
        defaultUser3
          .addContact(defaultUser2)
          .addContact(defaultUser1)
          .addContact(defaultUser3)
          .addContact(defaultUser5)
          .addContact(defaultUser6)
      )
      .set(
        defaultUser5.getName(),
        defaultUser3
          .addContact(defaultUser2)
          .addContact(defaultUser1)
          .addContact(defaultUser4)
          .addContact(defaultUser3)
          .addContact(defaultUser6)
      )
      .set(
        defaultUser6.getName(),
        defaultUser3
          .addContact(defaultUser2)
          .addContact(defaultUser1)
          .addContact(defaultUser4)
          .addContact(defaultUser5)
          .addContact(defaultUser3)
      );
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
      return true;
    }
    return false;
  }

  login(userName, password) {
    console.log(userName, password);
    const user = this.users.get(userName);
    if (!user) {
      console.log("Error, userName not found.");
    } else if (user.validatePass(password)) {
      console.log("Login Successful.");
      user.setOnline(true);
      return user;
    } else {
      console.log("Wrong Password!");
    }
    return null;
  }
}

const users = new UserData();

export default users;
