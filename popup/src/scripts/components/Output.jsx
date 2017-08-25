import React, {Component} from 'react';

class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const output = this.props.commandOutput;
    return (
      <div id="output">
      	<ul>
          {output.map(function(tab) {
          	return <li>{tab.title}</li>;
          })}
      	</ul>
      </div>
    );
  }
}

export default Output;