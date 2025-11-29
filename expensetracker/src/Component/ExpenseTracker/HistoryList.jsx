import React, { useContext } from 'react';
import style from './History.module.css'
import ExpenseTrackerContextStore from '../ExpenceTrackerStore/ExpenseTrackerStore';

function HistoryList( ) {

  const {totalBudget} = useContext(ExpenseTrackerContextStore);
  const {totalBalance} = useContext(ExpenseTrackerContextStore);
  const {totalExpense} = useContext(ExpenseTrackerContextStore);

  return (
    <div className={style.historyContainer}>
      <div className={style.history}>
        <div className={`${style.box} ${style.box1}`}>
          <span>Total Budget</span>
          <span>$ {totalBudget}</span>
        </div>
        <div className={`${style.box} ${style.box2}`}>
          <span>Expense</span>
          <span>$ {totalExpense}</span>
        </div>
        <div className={`${style.box} ${style.box3}`}>
          <span>Total Balance</span>
          <span>$ {totalBalance}</span>
        </div>
      </div>
    </div>
  )
}

export default HistoryList;
