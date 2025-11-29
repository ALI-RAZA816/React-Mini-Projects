import React from 'react';
import style from './ButtonContainer.module.css'
import Buttons from './Buttons/Buttons';

function ButtonContainer({buttonClickHandler}) {
  return (
    <div className={style.ButtonContainer}>
      <Buttons buttonClickHandler={buttonClickHandler}/>
    </div>
  )
}
export default ButtonContainer;
