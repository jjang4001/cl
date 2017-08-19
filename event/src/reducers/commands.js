import { compiler } from '../compile/compile';
const initialState = {
  allCommands: [],
  currCommand: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMMAND':
      state.allCommands.unshift(action.payload);
      return state;
    case 'EXEC_COMMAND':
      var c = new compiler(action.payload);
      state.currCommand = c.getOutput();
      return state;
    case 'CLEAR_COMMANDS':
      state.allCommands = [];
      return state;
    default:
      return state;
  }
};