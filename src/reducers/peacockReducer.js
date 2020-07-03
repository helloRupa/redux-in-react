const initialPeacockState = {
  peacocks: ['Showoff', 'Featherful'],
  selectedPeacock: 'Showoff'
};

function peacockReducer(state=initialPeacockState, action) {
  switch(action.type) {
    case 'SELECT_PEACOCK':
      if (!state.peacocks.includes(action.peacock)) {
        return state;
      }

      return {
        ...state,
        selectedPeacock: action.peacock
      }
    case 'ADD_PEACOCK':
      return {
        ...state,
        peacocks: [...state.peacocks, action.peacock]
      }
    default:
      return state;
  }
};

export default peacockReducer;