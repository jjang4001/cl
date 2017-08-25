import { compiler } from '../compile/compile';
import { OutputParser } from '../../../common/parser';

const initialState = {
  allCommands: [],
  output: null,
  commandType: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMMAND':
      state.allCommands.unshift(action.payload);
      return state;
    case 'EXEC_COMMAND':
      // the list of tabs doesn't show up automatically. I need to dispatch one more action before the list renders on page
      var c = new compiler(action.payload);
      const delta = {
        output: c.getOutput(),
        commandType: action.payload
      }
      return Object.assign({}, state, delta);
    case 'CLEAR_COMMANDS':
      state.allCommands = [];
      state.output = null;
      state.commandType = null;
      return state;
    default:
      return state;
  }
};