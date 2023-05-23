const defaultState = {
  first: false,
  second: false,
  third: false,
};

const SET_FIRST = 'SET_FIRST';
const SET_SECOND = 'SET_SECOND';
const SET_THIRD = 'SET_THIRD';
// eslint-disable-next-line default-param-last
const reducerFilters = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FIRST:
      return { first: true, second: false, third: false };
    case SET_SECOND:
      return { first: false, second: true, third: false };
    case SET_THIRD:
      return { first: false, second: false, third: true };
    default:
      return state;
  }
};

export const setFirstFilter = (payload) => ({ type: SET_FIRST, payload });
export const setSecondFilter = (payload) => ({ type: SET_SECOND, payload });
export const setThirdFilter = (payload) => ({ type: SET_THIRD, payload });
export default reducerFilters;
