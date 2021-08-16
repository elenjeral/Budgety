import React, { useContext } from 'react'
import { ReactComponent as Close } from '../img/close-circle-outline.svg'
import { BudgetContext } from './App'

export default function DisplayIncome(props) {
  const { handleDeleteValue } = useContext(BudgetContext);
  const {
    id,
    description,
    value
  } = props;
  return (
    <div className="display-box">
      <p className="display-des">{description}</p>
      <p className="display-inc-val">+{value}</p>
      <button
        onClick={() => handleDeleteValue(id, 'inc')}
        className='delete-btn'
      >
        <Close className='close close-inc' />
      </button>
    </div>
  )
}
