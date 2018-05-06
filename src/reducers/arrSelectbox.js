const initialState = [1];

export default function arrSelectbox(state = initialState, action) {
  const newArr = [...state];
  switch (action.type) {
    case 'ADD_SELECTOR':
      return [...state, action.value];
    case 'DEL_SELECTDOX':
      newArr.splice(action.index, 1);
      return newArr;
    case 'EDIT_SELECTDOX':
      newArr.splice(action.payload.index, 1, action.payload.value);
      return newArr;
    default:
      return state;
  }
}
