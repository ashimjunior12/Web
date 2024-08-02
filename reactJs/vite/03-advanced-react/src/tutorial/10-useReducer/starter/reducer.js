import { CLEAR_LIST, RESET_LIST, REMOVE_LIST } from './actions';
import { data } from '../../../data';


const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_LIST) {
    return {
      ...state,
      people: state.people.filter((item) => item.id !== action.payload.id),
    };
  }
  return state;
};

export default reducer;