import React, {useRef } from 'react'
import { useDispatch } from 'react-redux'

export default function Buttons() {
    const inputElement = useRef();

    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    const decrementHandler = () => {
        dispatch({
            type: 'DECREMENT'
        })
    }
    const addHandler = () => {
        dispatch({
            type: 'ADD',
            payload:{
                num:inputElement.current.value
            }
        });
        inputElement.current.value = " ";
    }
    const substractHandler = () => {
        dispatch({
            type: 'SUBSTRACT',
            payload:{
                num:inputElement.current.value
            }
        });
        inputElement.current.value = "";
    }

    const handlePrivacyToggle = () =>{
        dispatch({
            type:"PRIVACY",
        })
    }

    return (
        <>
            <div>
                <button onClick={incrementHandler} className='btn btn-success'>+1</button>
                <button onClick={decrementHandler} className='ms-3 btn btn-danger'>-1</button>
                <button onClick={handlePrivacyToggle}  className='ms-3 btn btn-warning'>Privacy Toggle</button>
            </div>
            <div className='d-flex mt-4'>
                <input style={{width:'100px'}} ref={inputElement} type="text" className='form-control me-2' placeholder='Enter number' />
                <button onClick={addHandler} className='btn btn-primary'>Add</button>
                <button onClick={substractHandler} className='btn ms-3 btn-danger'>Substract</button>
            </div>
        </>
    )
}
