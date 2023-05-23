const defaultState = {
  loading: true,
  loadingList: true,
};

const SET_LOADING_TRUE = 'SET_LOADING_TRUE';
const SET_LOADING_FALSE = 'SET_LOADING_FALSE';
const SET_LOADING_LIST_FALSE = 'SET_LOADING_LIST_FALSE';
const SET_LOADING_LIST_TRUE = 'SET_LOADING_LIST_TRUE';
// eslint-disable-next-line default-param-last
const reducerLoading = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_FALSE:
      return { ...state, loading: false };
    case SET_LOADING_LIST_FALSE:
      return { ...state, loadingList: false };
    case SET_LOADING_LIST_TRUE:
      return { ...state, loadingList: true };
    default:
      return state;
  }
};

export const setLoadingTrue = (payload) => ({ type: SET_LOADING_TRUE, payload });
export const setLoadingFalse = (payload) => ({ type: SET_LOADING_FALSE, payload });
export const setLoadingListFalse = (payload) => ({ type: SET_LOADING_LIST_FALSE, payload });
export const setLoadingListTrue = (payload) => ({ type: SET_LOADING_LIST_TRUE, payload });
export default reducerLoading;
