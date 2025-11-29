import { configureStore, createSlice } from '@reduxjs/toolkit';

// const INITIAL_VLAUE ={
//     // counter:0,
//     privacy:true
// }

const counterSlice = createSlice({
    name:'counter',
    initialState : { counterVal: 0 },
    reducers:{
        increment:(state)=>{
            state.counterVal++;
        },
        decrement:(state)=>{
            state.counterVal--;
            
        },
        add:(state, action)=>{
            state.counterVal += Number(action.payload.num);
        },
        substract:(state, action)=>{
            state.counterVal -= Number(action.payload.num);
        }
    }
});

const privacySlice = createSlice({
    name: 'privacy',
    initialState: true,
    reducers:{
        toggle:(state)=>{
            return state = !state
        }
    }
})

const counterStore = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        privacy:privacySlice.reducer
    }
});

export const counterAction = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;


// const counterReducer = (store = INITIAL_VLAUE, action) =>{
//     if(action.type === 'INCREMENT'){
//         return {...store, counter:store.counter + 1}
//     }
//     else if(action.type === 'DECREMENT'){
//         return {...store,counter:store.counter - 1}
//     }
//     else if(action.type === 'ADD'){
//         return {...store, counter:store.counter + Number(action.payload.num)}
//     }
//     else if(action.type === 'SUBSTRACT'){
//         return {...store ,counter:store.counter - Number(action.payload.num)}
//     }
//     else if(action.type === 'PRIVACY'){
//         return {...store, privacy:!store.privacy}
//     }
//     return store;
// }