export class compiler {
  constructor(command) {
    this.command = command;
    this.output = this.execCommand(command);
  }
  getCommand() {
    return this.command;
  }
  getOutput() {
    return this.output;
  }
  execCommand(command) {
    switch(command) {
      case "exec":
        return "exec";
      default:
        return "output";
    }
  }
}