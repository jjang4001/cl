const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return state + (action.payload || 2);
    case 'SUBTRACT_COUNT':
      return state - (action.payload || 2);
    default:
      return state;
  }
};
