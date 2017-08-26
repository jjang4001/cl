import React, {Component} from 'react';

class Ls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const output = this.props.lsOutput;
    return (
      <ul>
        {output.map(function(tab) {
          return <li>{tab.title}</li>;
        })}
      </ul>
    );
  }
}

export default Ls;