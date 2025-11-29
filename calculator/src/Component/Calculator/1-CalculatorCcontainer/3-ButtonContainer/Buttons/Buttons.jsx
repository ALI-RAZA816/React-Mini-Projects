import React from 'react';
import style from './Button.module.css'

function Buttons({buttonClickHandler}) {

  let buttonsNames = ['C', 'X', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3','+', '0', '.', '='];

  return (
    <div>
      {buttonsNames.map(button=>{
        return <button onClick={buttonClickHandler} key={button} className={style.button}>{button}</button>
      })}
    </div>
  )
}

export default Buttons;
