// Popup page

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Output from '../Output';

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
    this.addCommand();
    var payload = document.getElementById("input").value;
    this.props.dispatch({
      type: 'EXEC_COMMAND',
      payload: payload
    });
    this.props.dispatch({
      type: 'ADD_COUNT',
      payload: 1
    });
  }

  render() {
    const commands = this.props.commands;
    // for some reason, save and clear buttons work as expected, but exec needs another action to be executed before updating page
    return (
      <div>
        <h1 id="header">Popup/New Tab</h1>
        <p>Click Count: {this.props.count}</p>
        <p>Commands: {commands && commands.allCommands ? commands.allCommands : "boo"}</p>
        <input type="text" id="input"/>
        <button onClick={this.addCommand}>save</button>
        <button onClick={this.clearCommands}>clear</button>
        <button onClick={this.execCommand}>exec</button>
        <Output commandOutput={commands && commands.output ? commands.output : ["Type help for a list of commands"]}/>
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
