import React, { useState, useEffect } from 'react';
import DisplayBudget from './DisplayBudget';
import InputBudget from './InputBudget';
import DisplayBox from './DisplayBox';
import '../css/style.css';
import { v4 as uuidv4 } from 'uuid';

export const BudgetContext = React.createContext();
const LOCAL_STORAGE_KEY_1 = 'Budgety.inc'
const LOCAL_STORAGE_KEY_2 = 'Budgety.exp'

function App() {
  const [inc, setInc] = useState(income);
  const [exp, setExp] = useState(expense);
  const [totalInc, setTotalInc] = useState(0);
  const [totalExp, setTotalExp] = useState(0);
  const budgetContextValue = {
    handleAddValue,
    handleDeleteValue
  }

  useEffect(() => {
    const incJSON = localStorage.getItem(LOCAL_STORAGE_KEY_1);
    if (incJSON != null) setInc(JSON.parse(incJSON));

    const expJSON = localStorage.getItem(LOCAL_STORAGE_KEY_2);
    if (expJSON != null) setExp(JSON.parse(expJSON));
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_1, JSON.stringify(inc))
    localStorage.setItem(LOCAL_STORAGE_KEY_2, JSON.stringify(exp))
  }, [inc, exp])

  function handleAddValue(sign, desVal, val) {
    const properties = {
      id: uuidv4(),
      description: desVal,
      value: val
    }
    if (sign === 'inc') {
      setInc([...inc, properties]);
    }
    else {
      setExp([...exp, properties]);
    }
  }

  function handleDeleteValue(id, sign) {
    if (sign === 'inc') {
      setInc(inc.filter(i => i.id !== id));
    }
    else if (sign === 'exp') {
      setExp(exp.filter(e => e.id !== id))
    }
  }

  useEffect(() => {
    const incTotal = inc.reduce((total, i) => total + i.value, 0);
    const expTotal = exp.reduce((total, e) => total + e.value, 0);
    setTotalInc(incTotal);
    setTotalExp(expTotal);
  }, [inc, exp]);


  return (
    <BudgetContext.Provider value={budgetContextValue}>
      <DisplayBudget totalInc={totalInc} totalExp={totalExp} />
      <InputBudget />
      <DisplayBox income={inc} expense={exp} />
    </BudgetContext.Provider>
  )
}

export default App;

const income = [
  {
    id: uuidv4(),
    description: 'salary',
    value: 100000
  }
]
const expense = []