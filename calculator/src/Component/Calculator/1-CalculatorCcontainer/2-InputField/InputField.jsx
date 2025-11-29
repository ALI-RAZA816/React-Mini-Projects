import React from 'react';
import style from './InputField.module.css'

function InputField({calVal}) {
  return (
    <div>
      <input type="text" value={calVal} className={style.InputField}/>
    </div>
  )
}

export default InputField;
