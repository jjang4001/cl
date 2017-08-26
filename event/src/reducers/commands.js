import { compiler } from '../compile/compile';
// import { OutputParser } from '../../../common/parser';

const initialState = {
  output: null,
  commandType: null,
  allCommands: [],
  ls: null
};

export default (state = initialState, action) => {
  var c = new compiler(action.payload);
  switch (action.type) {
    case 'INIT': {
      const delta = {
        output: c.getOutput(),
        commandType: action.payload,
        allCommands: state.allCommands,
        ls: c.getOutput()
      }
      return Object.assign({}, state, delta);
    }

    case 'SAVE_COMMAND': {
      state.allCommands.unshift(action.payload);
      const delta = {
        output: state.output,
        commandType: action.payload,
        allCommands: state.allCommands,
        ls: state.ls
      }
      return Object.assign({}, state, delta);
    }

    case 'EXEC_COMMAND': {
      // the list of tabs doesn't show up automatically for some reason
      const delta = {
        output: c.getOutput(),
        commandType: action.payload,
        allCommands: state.allCommands,
        ls: c.getOutput()
      }
      return Object.assign({}, state, delta);
    }
    case 'CLEAR_COMMANDS': {
      const delta = {
        output: state.output,
        commandType: "init",
        allCommands: state.allCommands,
        ls: state.ls
      }
      return Object.assign({}, state, delta);
    }
    default: {
      return state;
    }
  }
};
