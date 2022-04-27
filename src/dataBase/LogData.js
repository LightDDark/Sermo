import Log from "./Log";

class LogData {
  constructor() {
    this.logs = [new Log(["maayanSh", "orYe"], true)];
  }
//new Map().set(
//       new Set(["maayanSh", "orYe"]),
//       new Log(["maayanSh", "orYe"], true)
  addLog(log) {
//    const un = log.getUserNames();
//     const found = this.logs.find(entry =>entry.;
//     if ( found.isPrivate &&
//       log.getIsPrivate()
//     ) {
//       console.log(
//         "something is wrong, attempted to create two private logs with same users"
//       );
//       return;
//     }
    this.logs.push(log);
    //this.logs.set(new Set(log.getUserNames()), log);
  }
  
  getLog(contacts, self) {
    for (let i=0;i<this.logs.length;i++){
      if (this.logs[i].userNames.includes(self.userName)){
        return this.logs[i];
      }
    }
  }
}

const logs = new LogData();

export default logs;
