import "./App.css";
import SubChat from "./chatPage/SubChat";
import Log from "./dataBase/Log"
import users from "./dataBase/UserData"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const user1 = users.getUser({userName:'maayanSh'});
    const user2 = users.getUser({userName:'orYe'});
    const logData = <Log users={[user1,user2]} isPrivate={true}/>
    return (
    <div className="App">
      <header className="App-header">
        <SubChat logDB={logData} user={user1} />
      </header>
    </div>
  );
}

export default App;
