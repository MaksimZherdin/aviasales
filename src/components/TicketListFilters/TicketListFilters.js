import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFirstFilter, setSecondFilter, setThirdFilter } from '../../store/ticketsFilter';
import { getFilterTickets } from '../../store/ticketsReducer';

import classes from './style.module.scss';

export default function TicketListFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const tickets = useSelector((state) => state.tickets.filtredTickets);
  const isLoading = useSelector((state) => state.loader.loading);
  const filterFirst = () => {
    const cheapest = tickets.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      return -1;
    });
    dispatch(setFirstFilter());
    dispatch(getFilterTickets(cheapest));
  };
  const filterSecond = () => {
    const expensive = tickets.sort((a, b) => {
      if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
        return 1;
      }
      return -1;
    });
    dispatch(setSecondFilter());
    dispatch(getFilterTickets(expensive));
  };

  useEffect(() => {
    filterFirst();
  }, [isLoading]);

  return (
    <form className={classes.ticketList__filters}>
      <input
        onChange={() => filterFirst()}
        checked={filters.first}
        className={classes['ticketList__filters-checkbox']}
        id="cheapest"
        type="radio"
        value="cheapest"
        name="filter"
      />
      <label className={classes['ticketList__filters-label']} htmlFor="cheapest">
        {' '}
        Самый дешевый{' '}
      </label>
      <input
        onChange={() => filterSecond()}
        checked={filters.second}
        className={classes['ticketList__filters-checkbox']}
        id="expensive"
        type="radio"
        value="expensive"
        name="filter"
      />
      <label className={classes['ticketList__filters-label']} htmlFor="expensive">
        {' '}
        Самый быстрый{' '}
      </label>
      <input
        onChange={() => dispatch(setThirdFilter())}
        checked={filters.third}
        className={classes['ticketList__filters-checkbox']}
        id="optimal"
        type="radio"
        value="optimal"
        name="filter"
      />
      <label className={classes['ticketList__filters-label']} htmlFor="optimal">
        {' '}
        Оптимальный{' '}
      </label>
    </form>
  );
}
