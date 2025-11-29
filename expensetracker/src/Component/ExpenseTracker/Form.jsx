import React, { useContext } from 'react'
import style from './Form.module.css'
import ExpenseTrackerContextStore from '../ExpenceTrackerStore/ExpenseTrackerStore';
function Form( ) {
  const {totalAmountChangeHandler}= useContext(ExpenseTrackerContextStore);
  const {insufficientBalanceError}= useContext(ExpenseTrackerContextStore);
  const {totalAmount}= useContext(ExpenseTrackerContextStore);
  const {TitleError}= useContext(ExpenseTrackerContextStore);
  const {SubmitBudget}= useContext(ExpenseTrackerContextStore);
  const {titleChangeHandler}= useContext(ExpenseTrackerContextStore);
  const {amountChangeHandler}= useContext(ExpenseTrackerContextStore);
  const {SubmitProductdetail}= useContext(ExpenseTrackerContextStore);
  const {itemTitle}= useContext(ExpenseTrackerContextStore);
  const {isEdited}= useContext(ExpenseTrackerContextStore);
  const {itemAmount}= useContext(ExpenseTrackerContextStore);
  const {BudgetError}= useContext(ExpenseTrackerContextStore);

  return (
    <div>
      <form action="" className={style.form}>
        <div className={`${style.box} ${style.box1}`}>
            <label htmlFor="">Budget</label>
            <input type="number" value={totalAmount} onChange={totalAmountChangeHandler} placeholder='Enter total amount' />
            <span className={`${style.error} ${BudgetError === true ? style.showError : ' '}`}>Field can't be empty</span>
            <button onClick={SubmitBudget}>Set Budget</button>
        </div>
        <div className={`${style.box} ${style.box2}`}>
            <label htmlFor="">Expense</label>
            <input type="text" value={itemTitle} onChange={titleChangeHandler} placeholder='Enter product title ' />
            <input type="number" value={itemAmount} onChange={amountChangeHandler} placeholder='Enter product amount' />
            <span className={`${style.error} ${TitleError === true ? style.showError : ' '}`}>Field can't be empty</span>
            <span className={`${style.error} ${insufficientBalanceError === true ? style.showError : ' '}`}>Insufficient Balance</span>
            <span className={`${style.error} ${isEdited === true ? style.showError : ' '}`}>Please edit current item before editing another item.</span>
            <button onClick={SubmitProductdetail}>Check Amount</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
