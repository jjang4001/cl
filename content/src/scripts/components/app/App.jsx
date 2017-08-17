// Content page

import React, {Component} from 'react';
import {connect} from 'react-redux';

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

  render() {
    const commands = this.props.commands;  // has all the commands when i click submit
    return (
      <div>
        <h1 id="header">Content</h1>
        <p>Click Count: {this.props.count}</p>
        <p>Commands: {commands}</p>
        <input type="text" id="input"/>
        <button onClick={this.addCommand}>Submit</button>
        <button onClick={this.clearCommands}>clear</button>
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
