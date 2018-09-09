import uuid from 'uuid';
import database from '../firebase/firebase';
// components calls action generator
// action generator return function
// cmponent dispatches funtion
// function runs (has the ability to dispath other action and do whatever it want)
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    
    const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense).then((ref) => {
      console.log('ref', ref);
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    })
  };
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = (expense) => {
  const { id } = expense;
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpenses = (id, expense) => {
  console.log(expense)
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(expense).then(() => {
      dispatch(editExpense({ id, expense }))
    });
  };
};
// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach(children => {
        expenses.push({ 
         id: children.key,
         ...children.val()
        }); 
      });
      
      dispatch(setExpenses(expenses));
    });
  }
};
