// Popup page

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Output from '../Output';

class App extends Component {

  constructor(props) {
    super(props);
    this.clearCommands = this.clearCommands.bind(this);
    this.addCommand = this.addCommand.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT',
        payload: 1
      });
    });
    this.props.dispatch({
      type: 'INIT',
      payload: 'init'
    });
  }

  clearCommands() {
    this.props.dispatch({
      type: 'CLEAR_COMMANDS'
    });
  }

  addCommand() {
    var payload = document.getElementById("input").value;
    this.props.dispatch({
      type: 'SAVE_COMMAND',
      payload: payload
    });
  }

  render() {
    const commands = this.props.commands;
    return (
      <div>
        <h1 id="header">Popup/New Tab</h1>
        <p>Click Count: {this.props.count}</p>
        <p>Commands: {commands && commands.allCommands ? commands.allCommands : "boo"}</p>
        <input type="text" id="input"/>
        <button onClick={this.addCommand}>enter</button>
        <button onClick={this.clearCommands}>clear</button>
        <Output 
          commandOutput={commands && commands.output ? commands.output : [{title: "Type help for a list of commands"}]} 
          commandType={commands && commands.commandType ? commands.commandType : null}
        />
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
