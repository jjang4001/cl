import { TabsService } from '../services/tabs-service';

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
      case "a":
        return "first command";
      case "ls":
        var _tabsService = new TabsService();
        return _tabsService.getAllTabs();
      case "exec":
        return "exec";
      default:
        return "output";
    }
  }
}