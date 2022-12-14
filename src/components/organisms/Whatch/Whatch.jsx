import React, { useState, useEffect } from 'react';
import { Clock, ClockCreatePanel, ClockContainer } from '../../index';
import ClockData from '../../../logics/clockData';
import createDefaultClock from '../../../logics/createDefaultClock';

export default function Whatch(props) {
  const [clocks, setClock] = useState(() => {
    const savedClocks = JSON.parse(localStorage.getItem('clocks'));
    if (savedClocks === null || savedClocks.length === 0) {
      return createDefaultClock();
    } else {
      return savedClocks.map((item) => new ClockData(item.city, item.timeZone))
    }
  })
  useEffect(() => {
    const savedClocks = localStorage.getItem('clocks');
    debugger
    if (savedClocks !== null && savedClocks.length !== 0) {
      setClock(JSON.parse(savedClocks).map((item) => new ClockData(item.city, item.timeZone)))
    }
    setInterval(() => {
      setClock(() => JSON.parse(localStorage.getItem('clocks')).map((item) => new ClockData(item.city, item.timeZone)))
    }, 60000)
  }, [])

  useEffect(() => {
    localStorage.setItem('clocks', JSON.stringify(clocks))
  }, [clocks])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const city = evt.target[0].value;
    const utc = evt.target[1].value;
    setClock((clocks) => {
      return [...clocks, new ClockData(city, Number(utc))]
    })
    evt.target[0].value = '';
    evt.target[1].value = '';
  }

  const handleDelete = (item) => {
    setClock(clocks => {
      return clocks.filter(clock => clock !== item)
    })
  }

  return (
    <>

      <ClockCreatePanel handleSubmit={handleSubmit} />
      <ClockContainer>
        {clocks.map((item) => {
          return (<Clock
            key={item.id}
            item={item}
            handleDelete={handleDelete} />)
        })}
      </ClockContainer>
    </>

  )
}