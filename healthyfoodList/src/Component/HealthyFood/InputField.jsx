import React from 'react'
import style from './InputField.module.css'

function InputField({value ,changleHandler, addItem}) {
  return (
    <div className={style.inputContainer}>
        <input type="text" value={value} onChange={changleHandler} className={style.InputField} placeholder='Enter items...' />
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default InputField;
