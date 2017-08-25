import { compiler } from '../compile/compile';
// import { OutputParser } from '../../../common/parser';

const initialState = {
  output: null,
  commandType: null,
  allCommands: []
};

export default (state = initialState, action) => {
  var c = new compiler(action.payload);
  switch (action.type) {
    case 'SAVE_COMMAND':
      state.allCommands.unshift(action.payload);
      return state;
    case 'EXEC_COMMAND':
      // the list of tabs doesn't show up automatically for some reason
      const delta = {
        output: c.getOutput(),
        commandType: action.payload,
        allCommands: state.allCommands
      }
      return Object.assign({}, state, delta);
    case 'CLEAR_COMMANDS':
      return initialState;
    default:
      return state;
  }
};
