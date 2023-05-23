const defaultState = {
  all: true,
  noStops: true,
  oneStops: true,
  twoStops: true,
  threeStops: true,
  props: [0, 1, 2, 3],
};

const ALL = 'ALL';
const NO_STOPS = 'NO_STOPS';
const ONE_STOPS = 'ONE_STOPS';
const TWO_STOPS = 'TWO_STOPS';
const THREE_STOPS = 'THREE_STOPS';
const FILTER_PROPS = 'FILTER_PROPS';
const ADD_PROPS = 'ADD_PROPS';
const SET_PROPS = 'SET_PROPS';
// eslint-disable-next-line default-param-last
const reducerCheckbox = (state = defaultState, action) => {
  switch (action.type) {
    case ALL:
      return { ...state, all: action.payload === undefined ? !state.all : action.payload };
    case NO_STOPS:
      return { ...state, noStops: action.payload === undefined ? !state.noStops : action.payload };
    case ONE_STOPS:
      return { ...state, oneStops: action.payload === undefined ? !state.oneStops : action.payload };
    case TWO_STOPS:
      return { ...state, twoStops: action.payload === undefined ? !state.twoStops : action.payload };
    case THREE_STOPS:
      return { ...state, threeStops: action.payload === undefined ? !state.threeStops : action.payload };
    case FILTER_PROPS:
      return { ...state, props: [...action.payload] };
    case ADD_PROPS:
      return { ...state, props: [...state.props, action.payload] };
    case SET_PROPS:
      return { ...state, props: [...action.payload] };
    default:
      return state;
  }
};

export const evryStop = (payload) => ({ type: ALL, payload });
export const altNoStop = (payload) => ({ type: NO_STOPS, payload });
export const altOneStop = (payload) => ({ type: ONE_STOPS, payload });
export const altTwoStop = (payload) => ({ type: TWO_STOPS, payload });
export const altThreeStop = (payload) => ({ type: THREE_STOPS, payload });
export const filterProps = (payload) => ({ type: FILTER_PROPS, payload });
export const addProps = (payload) => ({ type: ADD_PROPS, payload });
export const setProps = (payload) => ({ type: SET_PROPS, payload });
export default reducerCheckbox;
