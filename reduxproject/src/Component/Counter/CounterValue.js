import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterValue() {
   const counter =  useSelector(store=> store.counter);
  return (
    <div className='card-body'>
      <p className='card-text'>The current counter value is: {counter}</p>
    </div>
  )
}
