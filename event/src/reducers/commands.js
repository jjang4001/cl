const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMMAND':
      console.log("save command payload is " + action.payload);
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};