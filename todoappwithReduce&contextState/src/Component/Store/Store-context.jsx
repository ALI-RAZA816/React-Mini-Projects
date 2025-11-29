import { useState, useReducer, createContext } from "react";
export const TodoItemsContext = createContext([]);

const totoReducarFunction = (currentItems, action) => {
    let newItems = currentItems
    if (action.type === "ADD_ITEMS") {
        newItems = [...currentItems, {
            id: action.payload.id,
            name: action.payload.nameVal,
            date: action.payload.dateVal
        }];
    } else if (action.type === "DELETE_ITEMS") {
        newItems = currentItems.filter(item => item.id !== action.payload.id);
    }
    return newItems;
}

const TodoItemsReducerContextProvider = ({ children }) => {
    const [id, setid] = useState(0);
    const [nameVal, setnameVal] = useState("");
    const [dateVal, setdateVal] = useState("");
    const [items, dispatchItems] = useReducer(totoReducarFunction, []);


    const onchangenamehandler = (event) => {
        setnameVal(event.target.value);
    }
    const onchangedatehandler = (event) => {
        setdateVal(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!nameVal || nameVal === '') {
            alert("Field is required");
            return;
        }

        if (!dateVal || dateVal === '') {
            alert("Field is required");
            return;
        }

        setid(id + 1);
        const newToDoItems = {
            type: "ADD_ITEMS",
            payload: {
                id,
                nameVal,
                dateVal
            }
        }
        dispatchItems(newToDoItems);
    }

    const deleteItemHandler = (id) => {
        const deleteDoItems = {
            type: "DELETE_ITEMS",
            payload: { id }
        }
        dispatchItems(deleteDoItems);
    }

    return <TodoItemsContext.Provider value={{
        items,
        onchangenamehandler,
        onchangedatehandler,
        onSubmitHandler,
        deleteItemHandler
    }}>
        {children}
    </TodoItemsContext.Provider>
}

export default TodoItemsReducerContextProvider;