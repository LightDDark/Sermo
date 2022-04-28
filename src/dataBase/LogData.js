import Log from "./Log";

class LogData {
  constructor() {
    this.logs = [new Log(["maayanSh", "orYe"], true)];
  }

  addLog(log) {
    const un = log.getUserNames();
    if (!this.getLog(un[0], un[1])) {
      this.logs.push(log);
    }
  }

  getLog(contact, self) {
    for (let i = 0; i < this.logs.length; i++) {
      if (
        this.logs[i].userNames.includes(self.userName) &&
        this.logs[i].userNames.includes(contact.userName)
      ) {
        return this.logs[i];
      }
    }
    return undefined;
  }
}

const logs = new LogData();

export default logs;
