import React from 'react';
import style from './ListItem.module.css';
function ListItem({items ,deleteItemHandler}) {
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
