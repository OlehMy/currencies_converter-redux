import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CurrensyItem.module.scss';

type Props = {
  name: string;
  rate?: number;
};

export const CurrensyItem: React.FC<Props> = ({ name }) => {
  const router = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <article className={classes.currensyItem}>
      <p onClick={() => router(name)} className={classes.currensyItem__title}>
        {name}
      </p>
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
