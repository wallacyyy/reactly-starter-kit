const toggle = (state = { hidden: true}, action) => {
  switch(action.type) {
    case 'TOGGLE_DIV':
      return Object.assign({}, ...state, {hidden: !state.hidden});
    default:
      return state;
  }
};
export default toggle;
