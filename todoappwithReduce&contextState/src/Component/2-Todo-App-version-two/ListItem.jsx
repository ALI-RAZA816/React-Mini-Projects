import React, {useContext} from 'react';
import style from './ListItem.module.css';
import { TodoItemsContext } from '../Store/Store-context';
function ListItem() {
  const {items, deleteItemHandler} = useContext(TodoItemsContext);
  return (
    <div className={style.ListItem}>
      <ul>
          {items.map((item,index)=>{
           return <li key={index}><span>{index + 1}.{item.name}</span><span>{item.date}</span><button onClick={()=> deleteItemHandler(item.id)}>Delete</button></li>
          })}
      </ul>
    </div>
  )
}

export default ListItem;
