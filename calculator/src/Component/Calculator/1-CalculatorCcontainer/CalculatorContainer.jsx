import React, { useState } from 'react'
import InputField from './2-InputField/InputField';
import style from './CalculatorContainer.module.css'
import ButtonContainer from './3-ButtonContainer/ButtonContainer';

function CalculatorContainer() {
  const [calVal , setcalVal] = useState(" ");
  const buttonClickHandler = (event)=>{
    if(event.target.childNodes[0].data === 'C'){
      setcalVal(" ")
      
    }else if(event.target.childNodes[0].data === 'X'){
      setcalVal(calVal.substring(0, calVal.length - 1));
    }
    else if(event.target.childNodes[0].data === '='){
      setcalVal(eval(calVal));
    }else{
      let btnval = calVal + event.target.childNodes[0].data;
      setcalVal(btnval);
    }
  }
  return (
    <div className={style.CalculatorContainer}>
      <InputField calVal={calVal}/>
      <ButtonContainer buttonClickHandler={buttonClickHandler}/>
    </div>
  )
}

export default CalculatorContainer;
