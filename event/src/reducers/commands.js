const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_COMMAND':
      state.push(action.payload);
      return state;
    case 'CLEAR_COMMANDS':
      state = [];
      return state;
    default:
      return state;
  }
};