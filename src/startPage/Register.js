import { useRef, useState } from "react";
import users from "../dataBase/UserData";
import "./startPage.css";
import { Link } from "react-router-dom";

function Register() {
  const pass = useRef(null);
  const pass2 = useRef(null);
  const user = useRef(null);
  const nick = useRef(null);
  const [desc, setDesc] = useState("");
  let conf = true;
  const passConfirm = function () {
    if (pass2.current.value === pass.current.value) {
      setDesc("");
      conf = true;
    } else {
      setDesc("Password does not match.");
      conf = false;
    }
  };
  const registerUser = function () {
    if (!conf) {
      console.log("Error, cannot have empty fields or unmatched passwords.");
    } else {
      users.addUser(user.current.value, pass.current.value, nick.current.value);
    }
  };
  return (
    <form>
      <div className="Forms">
        <label className={"Welcome"}>Welcome to Sermo</label>
        <div className="User">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Username
            <input
              type="text"
              ref={user}
              placeholder="username"
              required
            ></input>
          </label>
        </div>
        <div className="Pass">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password
            <input
              type="password"
              ref={pass}
              placeholder="password"
              onChange={passConfirm}
              required
            ></input>
          </label>
        </div>
        <div className="Pass">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Password Confirmation
            <input
              type="password"
              ref={pass2}
              placeholder="password"
              onChange={passConfirm}
              required
            ></input>
            {desc}
          </label>
        </div>
        <div className="User">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Display Name
            <input
              type="text"
              ref={nick}
              placeholder="username"
              required
            ></input>
          </label>
        </div>
        <div className="LogButton">
          <button type="submit" onSubmit={registerUser}>
            Register
          </button>
        </div>
        <div className="Unreg">
          <label>
            Already registered? <Link to="/">Click here</Link> to login
          </label>
        </div>
      </div>
    </form>
  );
}

export default Register;
