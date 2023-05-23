import { setLoadingFalse, setLoadingListFalse } from '../loader';
import { getTickets } from '../ticketsReducer';

const array = [];
let errCounter = 0;
let count = 0;
const getTicketsFunc = () => async (dispatch) => {
  try {
    const api = await fetch('https://aviasales-test-api.kata.academy/search')
      .then((res) => res.json())
      .catch((res) => console.log(res));
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${api.searchId}`)
      .then((res) => res.json())
      .catch((res) => console.log(res));
    if (res.stop === false) {
      if (count === 0) {
        count++;
        array.push(...res.tickets);
        dispatch(getTickets({ tickets: [...array] }));
        dispatch(setLoadingFalse());
      }
      array.push(...res.tickets);
      dispatch(getTicketsFunc());
    } else if (res.stop === undefined) {
      dispatch(getTicketsFunc());
    } else if (res.stop === true) {
      dispatch(getTickets({ tickets: [...array] }));
      dispatch(setLoadingListFalse());
      return;
    }
  } catch (err) {
    errCounter += 1;
    if (errCounter === 3) {
      dispatch(getTickets({ tickets: [...array] }));
      dispatch(setLoadingListFalse());
      return;
    }
    dispatch(getTicketsFunc());
  }
};
export default getTicketsFunc;
