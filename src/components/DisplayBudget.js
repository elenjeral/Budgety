import React from 'react'

export default function DisplayBudget(props) {
  const {
    totalInc,
    totalExp
  } = props;
  const now = new Date();
  const month = now.getMonth();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = now.getFullYear();
  return (
    <>
      <div className="back">
        <h1>Available Budget in <span>{months[month] + ' ' + year}</span></h1>
        <div className="total-budget">
          <p className="total-budget-p">{totalInc - totalExp}</p>
        </div>
        <div className="dis-inc">
          <p className="dis-inc-p">INCOME</p>
          <p className="dis-inc-price">+ {totalInc}</p>
        </div>
        <div className="dis-exp">
          <p className="dis-exp-p">EXPENSE</p>
          <p className="dis-exp-price">- {totalExp}</p>
        </div>
      </div>
    </>
  )
}
