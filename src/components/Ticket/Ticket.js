import React from 'react';

import ticketLogo from '../../assets/img/S7 Logo.png';

import classes from './style.module.scss';

export default function Ticket({ item }) {
  const { price } = item;
  const originFromFirst = item.segments[0].origin;
  const originToFirst = item.segments[0].destination;
  const originFromSecond = item.segments[1].origin;
  const originToSecond = item.segments[1].destination;
  const stopsFirst = item.segments[0].stops;
  const stopsSecond = item.segments[1].stops;
  const hoursFromFirst = new Date(item.segments[0].date).getUTCHours();
  const minsFromFirst = new Date(item.segments[0].date).getUTCMinutes();
  const hoursFromSecond = new Date(item.segments[1].date).getUTCHours();
  const minsFromSecond = new Date(item.segments[1].date).getUTCMinutes();
  const travelerDurationH = Math.floor(item.segments[0].duration / 60);
  const travelerDurationM = item.segments[0].duration - travelerDurationH * 60;
  const travelerDurationSecondH = Math.floor(item.segments[1].duration / 60);
  const travelerDurationSecondM = item.segments[1].duration - travelerDurationSecondH * 60;
  function stopsCounter(num) {
    if (num === 0) {
      return 'пересадок';
    }
    if (num === 1) {
      return 'пересадка';
    }
    if (num > 1) {
      return 'пересадки';
    }
    return num;
  }
  function diffTimeH(a, b) {
    let time = a + b;
    if (time > 24) {
      time -= 24;
    }
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }
  let endTravelerTimeHourFirst = diffTimeH(travelerDurationH, hoursFromFirst);
  function diffTimeM(a, b) {
    let time = a + b;
    if (time > 60) {
      endTravelerTimeHourFirst -= 1;
      time -= 60;
    }
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  }
  const endTravelerTimeMinsFirst = diffTimeM(travelerDurationM, minsFromFirst);
  const endTravelerTimeHourSecond = diffTimeH(travelerDurationSecondH, hoursFromSecond);
  const endTravelerTimeMinsSecond = diffTimeM(travelerDurationSecondM, minsFromSecond);

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <span className={classes['ticket__header-price']}>{price} Р</span>
        <img src={ticketLogo} alt="" />
      </div>
      <div className={classes.ticket__wrapper}>
        <ul className={classes.ticket__list}>
          <li className={classes['ticket__list-item']}>
            <span className={classes['item-detail']}>
              {originFromFirst} – {originToFirst}
            </span>
            <span className={classes['item-info']}>
              {hoursFromFirst < 10 ? `0${hoursFromFirst}` : hoursFromFirst}:
              {minsFromFirst < 10 ? `0${minsFromFirst}` : minsFromFirst} – {endTravelerTimeHourFirst}:
              {endTravelerTimeMinsFirst}
            </span>
          </li>
          <li className={classes['ticket__list-item']}>
            <span className={classes['item-detail']}>В ПУТИ</span>
            <span className={classes['item-info']}>
              {travelerDurationH}ч {travelerDurationM}м
            </span>
          </li>

          <li className={classes['ticket__list-item']}>
            <span className={classes['item-detail']}>
              {stopsFirst.length} {stopsCounter(stopsFirst.length)}
            </span>
            <span className={classes['item-info']}>{stopsFirst.join(', ')}</span>
          </li>
        </ul>
        <ul className={classes.ticket__list}>
          <li className={classes['ticket__list-item']}>
            <span className={classes['item-detail']}>
              {originFromSecond} – {originToSecond}
            </span>
            <span className={classes['item-info']}>
              {hoursFromSecond < 10 ? `0${hoursFromSecond}` : hoursFromSecond}:
              {minsFromSecond < 10 ? `0${minsFromSecond}` : minsFromSecond} – {endTravelerTimeHourSecond}:
              {endTravelerTimeMinsSecond}
            </span>
          </li>
          <li className={classes['ticket__list-item']}>
            <span className={classes['item-detail']}>В ПУТИ</span>
            <span className={classes['item-info']}>
              {travelerDurationSecondH}ч {travelerDurationSecondM}м
            </span>
          </li>
          <li className={classes['ticket__list-item']}>
            <span className={classes['item-detail']}>
              {stopsSecond.length} {stopsCounter(stopsSecond.length)}
            </span>
            <span className={classes['item-info']}>{stopsSecond.join(', ')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
