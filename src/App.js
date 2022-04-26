import "./App.css";
import Login from "./startPage/Login";
// ----------------------------------
import SideBar from "./chatPage/SideBar";
import User from "./dataBase/User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideBar
          contacts={[
            new User("s", "s", "s"),
            new User("sa", "sa", "sa"),
            new User("sb", "sb", "sb"),
          ]}
        />
      </header>
    </div>
  );
}

export default App;
