// Content page

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT',
        payload: 5
      });
    });
  }

  handleChange() {
    this.props.dispatch({
      type: 'SAVE_COMMAND',
      payload: "test"
    });
  }

  render() {
    var commands = this.props.commands;
    return (
      <div>
        <h1 id="header">Content</h1>
        <p>Click Count: {this.props.count}</p>
        <p>Commands: {commands}</p>
        <button onClick={this.handleChange}>change</button>
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
