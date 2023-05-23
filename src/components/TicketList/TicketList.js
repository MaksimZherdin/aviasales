import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import uniqid from 'uniqid';

import Ticket from '../Ticket/Ticket';
import getTicketsFunc from '../../store/asyncActions/tickets';
import TicketListFilters from '../TicketListFilters/TicketListFilters';
import { getCounter } from '../../store/ticketsReducer';

import classes from './style.module.scss';

export default function TicketList() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.filtredTickets);
  const counter = useSelector((state) => state.tickets.counter);
  const shortTickets = useSelector((state) => state.tickets.filtredTickets.slice(0, counter));
  const listLoading = useSelector((state) => state.loader.loadingList);
  const loading = useSelector((state) => state.loader.loading);
  const shortTicketsFunc = () => {
    const shortTickets = tickets.slice(0, counter + 5);
    dispatch(getCounter());
    return shortTickets;
  };
  useEffect(() => {
    dispatch(getTicketsFunc());
    shortTicketsFunc();
  }, []);

  return (
    <div className={classes.ticketList}>
      <TicketListFilters />
      {!loading ? (
        <>
          {shortTickets.map((item) => (
            <Ticket key={uniqid()} item={{ ...item }} />
          ))}
        </>
      ) : (
        <div className={classes.ticketList__loader}>{listLoading && <TailSpin color="lightblue" />}</div>
      )}
      {tickets.length <= 0 && !loading && (
        <span className={classes.ticketList__alert}>Рейсов, подходящих под заданные фильтры, не найдено</span>
      )}
      {counter < tickets.length && tickets.length > 0 && (
        <button type="button" onClick={() => shortTicketsFunc()} className={classes.ticketList__button}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  );
}
