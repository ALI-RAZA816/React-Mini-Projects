import {useState} from 'react';
import style from './Counter.module.css'

export default function Counter() {
    const [value, setvalue] = useState(0);

    const formatCount = (value)=>{
        return value <= 9 ? `0${value}` : value
    }

    const incrementHandler = ()=>{
        setvalue(value + 1);
    }

    const decrementHandler = ()=>{
        value <= 0 ? setvalue(value) : setvalue(value - 1);
    }

    const resetHandler = ()=>{
        setvalue(0);
    }

  return (
    <div className={style.counterBox}>
      <h1>{formatCount(value)}</h1>
      <div className={style.buttons}>
        <button type='button' onClick={decrementHandler}><i className='fa-solid fa-minus'></i></button>
        <button type='button' onClick={resetHandler}>Reset</button>
        <button type='button' onClick={incrementHandler}><i className='fa-solid fa-plus'></i></button>
      </div>
    </div>
  )
}
