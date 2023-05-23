import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducerTickets from './ticketsReducer';
import reducerCheckbox from './ticketsCheckbox';
import reducerFilters from './ticketsFilter';
import reducerLoading from './loader';

const rootReducer = combineReducers({
  tickets: reducerTickets,
  checkbox: reducerCheckbox,
  filters: reducerFilters,
  loader: reducerLoading,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
