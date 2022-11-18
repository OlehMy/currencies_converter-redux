import React from 'react';
import classes from './SearchInput.module.scss';

export const SearchInput: React.FC = () => {
  return (
    <div className={classes.input}>
      <input
        className={classes.input__body}
        type="text"
        name=""
        id="dynamic-label-input"
        placeholder="Search by name"
      />
      <label className={classes.input__label} htmlFor="dynamic-label-input">
        Search by name
      </label>
    </div>
  );
};
