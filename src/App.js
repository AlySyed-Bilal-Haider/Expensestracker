import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
// this is dummy DataTransfer, in array of object Formate.
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'System limited',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Araham software', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'BigMart company',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'The xxcode It solutions',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
//   This is a function, we have used the parent-child concept.
//  Form component pass value of addExpencesHandler Method and Destructuring with previous Data
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
