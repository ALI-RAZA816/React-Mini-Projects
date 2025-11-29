import React, { useState } from 'react'
import AppName from './AppName';
import AppFields from './AppFields';
import ListItem from './ListItem';
import style from './TodoAppContainer.module.css'

function TodoAppContainer() {

    const [items, setitems] = useState([]);
    const [id, setid] = useState(0);
    const [nameVal, setnameVal] = useState("");
    const [dateVal, setdateVal] = useState("");

    const onchangenamehandler = (event)=>{
        setnameVal(event.target.value);
    }
    const onchangedatehandler = (event)=>{
        setdateVal(event.target.value);
    }

    const onSubmitHandler = (event)=>{
        event.preventDefault();
          if(!nameVal || nameVal === ''){
            alert("Field is required");
            return;
        }

        if(!dateVal || dateVal === ''){
            alert("Field is required");
            return;
        }
        
        setid(id + 1);
        let newItems = [...items,{
            id:id,
            name:nameVal,
            date:dateVal
        }];
        setitems(newItems);
    }

    const deleteItemHandler = (id)=>{
        let newList;
        newList = items.filter(item => item.id !== id);
        setitems(newList);
    }
    return (
        <div className={style.container}>
            <AppName />
            <AppFields  onSubmitHandler = {onSubmitHandler} onchangenamehandler = {onchangenamehandler} onchangedatehandler = {onchangedatehandler} />
            <ListItem items={items} deleteItemHandler = {deleteItemHandler} />
        </div>
    )
}

export default TodoAppContainer;
