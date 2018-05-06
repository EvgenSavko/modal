const initialState = [];

export default function arrMainObject(state = initialState, action) {
  switch (action.type) {
    case 'ADD_OBJECT':
      return [...action.arr];
    default:
      return state;
  }
}
