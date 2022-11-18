import React, { useState } from 'react';
import classes from './CurrensyItem.module.scss';

export const CurrensyItem: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <article className={classes.currensyItem}>
      <p className={classes.currensyItem__title}>Some currency name</p>
      <div className={classes.currensyItem__starGroup}>
        <input
          type="checkbox"
          className={classes.currensyItem__checkbox}
          checked={checked}
          onChange={handleChange}
        />
        <span className={classes.currensyItem__icon}>
          {checked ? '\u2605' : '\u2606'}
        </span>
      </div>
    </article>
  );
};
