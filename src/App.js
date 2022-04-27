import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import users from "./dataBase/UserData";
import MainChat from "./chatPage/MainChat";

function App() {
  const user = users.getUser("orYe");
  return (
    <div className="App">
      <MainChat user={user} />
    </div>
  );
}

export default App;
