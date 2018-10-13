import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpenses, startRemoveExpense } from '../actions/expenses';

class EditExpensePage extends React.Component{
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='header-page__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <div>
            <button className='button button--secondary' onClick={this.onRemove}>Remove</button>
          </div>
        </div>
        
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
