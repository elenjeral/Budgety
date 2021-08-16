import React, { useContext } from 'react'
import { ReactComponent as Close } from '../img/close-circle-outline.svg'
import { BudgetContext } from './App'

export default function DisplayExpense(props) {
  const { handleDeleteValue } = useContext(BudgetContext);
  const {
    id,
    description,
    value
  } = props;
  return (
    <div className="display-box">
      <p className="display-des">{description}</p>
      <p className="display-exp-val">-{value}</p>
      <button
        onClick={() => handleDeleteValue(id, 'exp')}
        className='delete-btn'
      >
        <Close className='close close-exp' />
      </button>
    </div>
  )
}
