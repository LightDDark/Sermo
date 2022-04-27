import Log from "./Log";

class LogData {
  constructor() {
    this.logs = new Map().set(
      new Set(["maayanSh", "orYe"]),
      new Log(["maayanSh", "orYe"], true)
    );
  }

  addLog(log) {
    const un = log.getUserNames();
    if (
      this.logs.has(un) &&
      this.logs.get(un).getIsPrivate() &&
      log.getIsPrivate()
    ) {
      console.log(
        "something is wrong, attempted to create two private logs with same users"
      );
      return;
    }
    this.logs.set(new Set(log.getUserNames()), log);
  }

  getLog(userNames) {
    return this.logs.get(new Set(userNames));
  }
}

const logs = new LogData();

export default logs;
