import React, { useContext } from 'react'
import style from './AppFields.module.css'
import { TodoItemsContext } from '../Store/Store-context';

function AppFields() {
  const {onchangenamehandler, onchangedatehandler, onSubmitHandler} = useContext(TodoItemsContext);
  return (
    <div>
      <form action="" onSubmit={onSubmitHandler} className={style.appFields}>
        <input type="text" onChange={onchangenamehandler} name='name' placeholder='Enter item' />
        <input type="date" onChange={onchangedatehandler} name='date' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AppFields;
