import React from "react";
import User from "./User";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: new Map().set(
          'orYe',
          new User({userName: 'orYe', password: '12345', nickName: 'Or'})).set('maayanSh',
          new User({userName: 'maayanSh', password: '54321', nickName: 'Maayan'})).set('niceBo',
          new User({userName: 'niceBo', password: '55555', nickName: 'Bodek'}))
    };
  }

  getUser({userName}){
    return this.state.users.get(userName);
  }
  addUser({ userName, password, nickName }) {
    if (this.state.users.has(userName)) {
      console.log("Error, userName already in use.");
    } else {
      const users = this.state.users;
      users.set(
        userName,
        new User({ userName: userName, password: password, nickName: nickName })
      );
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

const users = new UserData();

export default users;