import React, { useState, useContext } from 'react'
import { ReactComponent as CheckMark } from '../img/checkmark-circle-outline.svg'
import { BudgetContext } from './App'

export default function InputBudget() {
  const [desVal, setDesVal] = useState();
  const [val, setVal] = useState();
  const [sign, setSign] = useState('inc');
  const {
    handleAddValue,
  } = useContext(BudgetContext);
  /*function handleKeyPress(event) {
    if (event.keyCode === 13 || event.which === 13) {
      handleAddValue(sign, desVal, val);
    }
  }*/
  return (
    <>
      <div className="div-2">
        <select className="select add-effect"
          onChange={(e) => {
            setSign(e.target.value)
          }}>
          <option value="inc" >+</option>
          <option value="exp">-</option>
        </select>
        <input
          type="text"
          placeholder="Add Description"
          className="input-des add-effect"
          onChange={(e) => setDesVal(e.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          className="input-val add-effect"
          onChange={(e) => setVal(parseFloat(e.target.value))}
        />
        <button
          className="add-btn color"
          onClick={() => {
            handleAddValue(sign, desVal, val);
          }}
        >
          <CheckMark className="check-mark" />
        </button>
      </div>
    </>
  )
}