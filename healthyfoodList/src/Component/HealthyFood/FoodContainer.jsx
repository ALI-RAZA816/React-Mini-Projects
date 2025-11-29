import React ,{useState} from 'react'
import InputField from './InputField';
import style from './FoodContainer.module.css'
import ListContainer from './ListContainer';

function FoodContainer() {

    const [value, setvalue] = useState('');
    const [listitem, setitem] = useState([]);

    const changleHandler = (event)=>{
        setvalue(event.target.value);
    }

    const addItem = ()=>{
        if(!value){
            alert("Add Item");
            return;
        }
        let item = value;
        let newItem = [...listitem , item];
        setitem(newItem);
    }
    return (
        <div className={style.container}>
            <InputField value={value} changleHandler = {changleHandler} addItem = {addItem} />
            <ListContainer listitem = {listitem} />
        </div>
    )
}

export default FoodContainer;