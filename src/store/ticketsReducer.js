const defaultState = {
  tickets: [],
  filtredTickets: [],
  shortTickets: [],
  boolean: false,
  counter: 0,
};

const GET_TICKETS = 'GET_TICKETS';
const FILTER_TICKETS = 'FILTER_TICKETS';
const SHORT_TICKETS = 'SHORT_TICKETS';
const DEFAULT_TICKETS = 'DEFAULT_TICKETS';
const ALT_BOOLEAN = 'ALT_BOOLEAN';
const SET_COUNTER = 'SET_COUNTER';
// eslint-disable-next-line default-param-last
const reducerTickets = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        filtredTickets: [...action.payload.tickets],
      };
    case DEFAULT_TICKETS:
      return { ...state, filtredTickets: [...state.tickets] };
    case SHORT_TICKETS:
      return { ...state, shortTickets: [...action.payload] };
    case FILTER_TICKETS:
      return { ...state, filtredTickets: [...action.payload] };
    case ALT_BOOLEAN:
      return { ...state, boolean: action.payload === undefined ? !state.boolean : action.payload };
    case SET_COUNTER:
      return { ...state, counter: state.counter + 5 };
    default:
      return state;
  }
};
export const getTickets = (payload) => ({ type: GET_TICKETS, payload });
export const getDefaultTickets = (payload) => ({ type: DEFAULT_TICKETS, payload });
export const getFilterTickets = (payload) => ({ type: FILTER_TICKETS, payload });
export const setAltBoolean = (payload) => ({ type: ALT_BOOLEAN, payload });
export const getShortTickets = (payload) => ({ type: SHORT_TICKETS, payload });
export const getCounter = (payload) => ({ type: SET_COUNTER, payload });
export default reducerTickets;
