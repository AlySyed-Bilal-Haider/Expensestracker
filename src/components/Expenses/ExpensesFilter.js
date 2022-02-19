import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  // we are select years and then we have to use the filter in the filter, 
  // then render data on a web page, based on conditions.
  // The and pass selected value of filter component based on parent-child Method
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Selected by year in List</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
