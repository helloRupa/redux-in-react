const initialCatState = {
  cats: ['Meowser', 'Charlie', 'Fluffanilla'],
  selectedCat: 'Meowser'
};

function catReducer(state=initialCatState, action) {
  switch(action.type) {
    case 'SELECT_CAT':
      if (!state.cats.includes(action.cat)) {
        return state;
      }

      return {
        ...state,
        selectedCat: action.cat
      }
    case 'ADD_CAT':
      return {
        ...state,
        cats: [...state.cats, action.cat]
      }
    default:
      return state;
  }
};

export default catReducer;