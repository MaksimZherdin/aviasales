import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import { getFilterTickets } from '../../store/ticketsReducer';
import {
  addProps,
  altNoStop,
  altOneStop,
  altThreeStop,
  altTwoStop,
  evryStop,
  setProps,
} from '../../store/ticketsCheckbox';

import classes from './style.module.scss';

export default function TransferFiltred() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets.tickets);
  const checkbox = useSelector((state) => state.checkbox);
  const props = useSelector((state) => state.checkbox.props);
  const listLoading = useSelector((state) => state.loader.loadingList);
  const filtred = () => {
    const array = [];
    tickets.forEach((element) => {
      const lengthOne = element.segments[0].stops.length;
      const lengthTwo = element.segments[1].stops.length;
      if (props.some((item) => item === lengthOne || item === lengthTwo)) {
        array.push(element);
      }
    });
    dispatch(getFilterTickets(array));
  };
  const propsInclude = (num) => {
    if (props.some((item) => item === num)) {
      const filtredList = props.filter((item) => item !== num);
      dispatch(setProps(filtredList));
    } else {
      dispatch(addProps(num));
    }
  };
  const checkAll = () => {
    if (checkbox.noStops && checkbox.oneStops && checkbox.twoStops && checkbox.threeStops) {
      dispatch(evryStop(true));
    } else {
      dispatch(evryStop(false));
    }
  };
  const dispOther = () => {
    if (checkbox.all) {
      dispatch(altNoStop(false));
      dispatch(altOneStop(false));
      dispatch(altTwoStop(false));
      dispatch(altThreeStop(false));
      dispatch(setProps([]));
    } else {
      dispatch(altNoStop(true));
      dispatch(altOneStop(true));
      dispatch(altTwoStop(true));
      dispatch(altThreeStop(true));
      dispatch(setProps([0, 1, 2, 3]));
    }
  };

  useEffect(() => {
    checkAll();
    filtred();
  }, [props]);

  return (
    <div className={classes.transfer__container}>
      <fieldset className={classes.transfer__list}>
        <span className={classes.transfer__label}>Количество пересадок</span>
        <div onChange={() => dispOther()} className={classes.transfer__item}>
          <input
            onChange={() => dispatch(evryStop())}
            checked={checkbox.all}
            className={classes['transfer__item-checkbox']}
            id="all"
            type="checkbox"
            value="allSub"
          />
          <label className={classes['transfer__item-label']} htmlFor="all">
            Все
          </label>
        </div>
        <div onChange={() => propsInclude(0)} className={classes.transfer__item}>
          <input
            onChange={() => dispatch(altNoStop())}
            checked={checkbox.noStops}
            className={classes['transfer__item-checkbox']}
            id="none"
            type="checkbox"
            value="none"
          />
          <label className={classes['transfer__item-label']} htmlFor="none">
            Без пересадок
          </label>
        </div>
        <div onChange={() => propsInclude(1)} className={classes.transfer__item}>
          <input
            onChange={() => dispatch(altOneStop())}
            checked={checkbox.oneStops}
            className={classes['transfer__item-checkbox']}
            id="oneTransfer"
            type="checkbox"
            value="oneTransfer"
          />
          <label className={classes['transfer__item-label']} htmlFor="oneTransfer">
            1 пересадка
          </label>
        </div>
        <div onChange={() => propsInclude(2)} className={classes.transfer__item}>
          <input
            onChange={() => dispatch(altTwoStop())}
            checked={checkbox.twoStops}
            className={classes['transfer__item-checkbox']}
            id="twoTransfers"
            type="checkbox"
            value="twoTransfers"
          />
          <label className={classes['transfer__item-label']} htmlFor="twoTransfers">
            2 пересадки
          </label>
        </div>
        <div onChange={() => propsInclude(3)} className={classes.transfer__item}>
          <input
            onChange={() => dispatch(altThreeStop())}
            checked={checkbox.threeStops}
            className={classes['transfer__item-checkbox']}
            id="threeTransfers"
            type="checkbox"
            value="threeTransfers"
          />
          <label className={classes['transfer__item-label']} htmlFor="threeTransfers">
            3 пересадки
          </label>
        </div>
      </fieldset>
      <div className={classes[('ticketList__loader', 'ticketList__loader-right')]}>
        {listLoading && <TailSpin color="lightblue" />}
      </div>
    </div>
  );
}
