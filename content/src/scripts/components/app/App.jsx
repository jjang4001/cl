// Content page

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Output from '../Output';

class App extends Component {

  constructor(props) {
    super(props);
    this.clearCommands = this.clearCommands.bind(this);
    this.addCommand = this.addCommand.bind(this);
    this.execCommand = this.execCommand.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT',
        payload: 1
      });
    });
    console.log("mount");
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
    console.log(this.props);
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

  test() {
    console.log("test");
    this.props.clearCommands()
  }

  render() {
    const commands = this.props.commands;
    return (
      <div>
        <h1 id="header">Content</h1>
        <p>Click Count: {this.props.count}</p>
        <p>Commands: {commands && commands.allCommands ? commands.allCommands : "boo"}</p>
        <input type="text" id="input"/>
        <button onClick={this.addCommand}>save</button>
        <button onClick={this.clearCommands}>clear</button>
        <button onClick={this.execCommand}>exec</button>
        <Output commandOutput={commands && commands.output ? commands.output : ["Type help for a list of commands"]}/>
        <button onClick={this.test}>test</button>
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
