// Content page

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.clearCommands = this.clearCommands.bind(this);
    this.addCommand = this.addCommand.bind(this);
    this.execCommand = this.execCommand.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT',
        payload: 1
      });
    });
  }

  clearCommands() {
    this.props.dispatch({
      type: 'CLEAR_COMMANDS'
    });
  }

  addCommand() {
    var input = document.getElementById("input").value;
    this.props.dispatch({
      type: 'SAVE_COMMAND',
      payload: input
    });
  }

  execCommand() {
    var payload = document.getElementById("input").value;
    console.log("here");
    console.log(payload);
    this.props.dispatch({
      type: 'EXEC_COMMAND',
      payload: payload
    });
  }

  render() {
    const commands = this.props.commands;
    console.log("here 2");
    console.log(commands);
    return (
      <div>
        <h1 id="header">Content</h1>
        <p>Click Count: {this.props.count}</p>
        <p>Commands: {commands && commands.allCommands ? commands.allCommands : "boo"}</p>
        <input type="text" id="input"/>
        <button onClick={this.addCommand}>save</button>
        <button onClick={this.clearCommands}>clear</button>
        <button onClick={this.execCommand}>exec</button>
        <div id="tabs">
          <p> Tabs: {commands && commands.currCommand ? commands.currCommand : "nothing yet"}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    commands: state.commands
  };
};

export default connect(mapStateToProps)(App);
