import React, {Component} from 'react';

class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const output = this.props.commandOutput;
  	console.log(output);
    return (
      <div id="output">
      	<p>{output}</p>
      </div>
    );
  }
}

export default Output;