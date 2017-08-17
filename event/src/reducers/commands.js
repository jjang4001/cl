// import { compiler } from '../compile/compiler';
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMMAND':
      state.unshift(action.payload);
      return state;
    // case 'EXEC_COMMAND':
    //   var c = new compiler("exec");
    //   state = c.getCommand();
    //   return state;
    case 'CLEAR_COMMANDS':
      state = [];
      return state;
    default:
      return state;
  }
};