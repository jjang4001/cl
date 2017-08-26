import React, {Component} from 'react';

import Ls from './Ls';

class Output extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const output = this.props.commandOutput;
    const commandType = this.props.commandType;
    if (commandType == "ls") {
      return (
        <div id="output">
          <Ls lsOutput={output}/>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Output;