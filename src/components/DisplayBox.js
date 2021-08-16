import React from 'react'
import DisplayIncome from './DisplayIncome';
import DisplayExpense from './DisplayExpense';

export default function DisplayBox({ income, expense }) {
  return (
    <div className="div-3">
      <div className="inner-div-1">
        <h2>INCOME</h2>
        {income.map((inc) => {
          return (
            <DisplayIncome key={inc.id} {...inc} />
          )
        })}
      </div>
      <div className="inner-div-2">
        <h3>EXPENSES</h3>
        {expense.map((exp) => {
          return (
            <DisplayExpense key={exp.id} {...exp} />
          )
        })}
      </div>
    </div>
  )
}

