import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: props.userName,
      password: props.password,
      nickName: props.nickName,
      contacts: new Set(),
    };
  }

  validatePass({ password }) {
    return this.state.password === password;
  }

  addContact({ userName }) {
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
}

export default User;
