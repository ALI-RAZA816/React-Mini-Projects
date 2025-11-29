import React, { useContext } from 'react'
import style from './ListItem.module.css';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ExpenseTrackerContextStore from '../ExpenceTrackerStore/ExpenseTrackerStore';

function ListItem( ) {

  const {listItem} = useContext(ExpenseTrackerContextStore);
  const {editHandler} = useContext(ExpenseTrackerContextStore);
  const {deletItemHandler} = useContext(ExpenseTrackerContextStore);
  
  return (
    <ul className={style.ulContainer}>
        {listItem.map((item,index)=>{
            return <li key={index}><span>{item.title}</span><span>${item.amount}</span><span><MdDelete onClick={()=> deletItemHandler(item.id)} className={style.delete} /><FaEdit onClick={()=> editHandler(item.id)} className={style.edit} /></span></li> 
        })}
    </ul>
  )
}
export default  ListItem;