import { TabsService } from '../services/tabs-service';

export class compiler {
  constructor(command) {
    this.command = command;
    this._tabsService = new TabsService();
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
      case "a":
        return [{title: "first command", test: "test"}, {title: "test", test: "test2"}];
      case "ls":
        return this._tabsService.getAllTabs();
      case "init":
        return this._tabsService.getAllTabs();
      default:
        return [{title: "could not recognize the command"}];
    }
  }
}