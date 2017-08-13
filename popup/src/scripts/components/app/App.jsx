// popup page

import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
      input: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
    var button = document.getElementById("button");
    button.addEventListener('click', () => {
      console.log('button subtract');
      this.props.dispatch({
        type: 'SUBTRACT_COUNT'
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleChange(event) {
    console.log(this.state.input);
    this.props.dispatch({
      type: 'SUBTRACT_COUNT'
    });
    this.setState({input: event.target.value});
  }

  handleSubmit(event) {
    this.props.dispatch({
      type: 'SAVE_COMMAND',
      payload: "command from popup"
    })
    event.preventDefault();
  }

  render() {
    let p = null;

    return (
      <div>
        <Title />
        <p>
          {this.state.isToggleOn ? (
            <p>Click Count: {this.props.count}</p>
          ) : (
            <p>It is {this.state.date.toLocaleTimeString()}</p>
          )}
        </p>
        <button id="button" onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input:
            <input type="text" value={this.state.input} onChange={this.handleChange} />
          </label>
          <p>{this.state.input}</p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);

// using functional components

function Title(props) {
  return (
    <h1>Popup</h1>
  );
}