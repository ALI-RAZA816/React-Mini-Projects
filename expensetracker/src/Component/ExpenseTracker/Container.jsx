import React, { useState } from 'react'
import Form from './Form';
import style from './Container.module.css'
import HistoryList from './HistoryList';
import ListItemContainer from './ListItemContainer';
import ExpenseTrackerContextStore from '../ExpenceTrackerStore/ExpenseTrackerStore';
function Container() {

  const [index, setindex] = useState(0);
  const [listItem, setlistItem] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemAmount, setItemAmount] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [TitleError, setTitleError] = useState(false);
  const [BudgetError, setBudgetError] = useState(false);
  const [isEdited, setisEdited] = useState(false);
  const [insufficientBalanceError, setinsufficientBalanceError] = useState(false);

  let totalExpense = listItem.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  // Calculate totalBalance based on totalBudget and totalExpense
  const totalBalance = totalBudget - totalExpense;

  // totalBudget
  const totalAmountChangeHandler = (event) => {
    setTotalAmount(Number(event.target.value));
  }


  // submitBudget Handler
  const SubmitBudget = (event) => {
    event.preventDefault();
    if (!totalAmount || totalAmount === ' ') {
      setBudgetError(true);
      return;
    }
    setTotalBudget(totalBudget + totalAmount);
    setTotalAmount(0);
    setBudgetError(false);
  }

  // productTitle
  const titleChangeHandler = (event) => {
    setItemTitle(event.target.value);
  }

  // productAmount
  const amountChangeHandler = (event) => {
    setItemAmount(Number(event.target.value));
  }

  // productDetail Handler
  const SubmitProductdetail = (event) => {
    event.preventDefault();
    setisEdited(false);

    if (itemAmount > totalBalance) {
      setinsufficientBalanceError(true);
      setTitleError(false);
      return;
    }
    setinsufficientBalanceError(false);

    if (!itemAmount || !itemTitle) {
      setTitleError(true);
      return;
    }
    setTitleError(false);


    setlistItem([
      ...listItem, {
        id: index,
        title: itemTitle,
        amount: itemAmount
      }
    ]);
    setindex(index + 1);
    setItemTitle('');
    setItemAmount(0);

  }

  const deletItemHandler = (id) => {
    let deleteitem = listItem.filter(item => item.id !== id);
    setlistItem(deleteitem);
  }

  const editHandler = (id) => {
    if (itemTitle) {
      setisEdited(true);
      setinsufficientBalanceError(false);
      return;
    }

    let deleteitem = listItem.filter(item => item.id !== id);
    let editItem = listItem.find(item => item.id === id);
    setlistItem(deleteitem);
    setItemTitle(editItem.title);
    setItemAmount(editItem.amount);
  }

  return (
    <div className={style.container}>
      <ExpenseTrackerContextStore.Provider value= {{
        listItem,
        isEdited,
        itemTitle,
        TitleError,
        totalAmount,
        itemAmount,
        BudgetError,
        totalExpense,
        totalBudget,
        totalBalance,
        insufficientBalanceError,
        editHandler,
        SubmitBudget,
        deletItemHandler,
        titleChangeHandler,
        amountChangeHandler,
        SubmitProductdetail,
        totalAmountChangeHandler
      }}>
        <Form/>
        <HistoryList/>
        <ListItemContainer/>
      </ExpenseTrackerContextStore.Provider>
    </div>
  )
}

export default Container;
