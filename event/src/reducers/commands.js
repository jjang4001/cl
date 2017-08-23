import { compiler } from '../compile/compile';

const initialState = {
  allCommands: [],
  output: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMMAND':
      state.allCommands.unshift(action.payload);
      return state;
    case 'EXEC_COMMAND':
      var c = new compiler(action.payload);
      state.output = c.getOutput();
      return state;
    case 'CLEAR_COMMANDS':
      return initialState;
    default:
      return state;
  }
};