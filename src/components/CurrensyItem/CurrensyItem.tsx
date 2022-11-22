import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currencyCheckedTogler } from '../../redux/reducers/currencies/actions';
import classes from './CurrensyItem.module.scss';

type Props = {
  name: string;
  checked: boolean | undefined;
};

export const CurrensyItem: React.FC<Props> = ({ name, checked }) => {
  const router = useNavigate();
  const [isChecked, setIsChecked] = useState(checked);
  const dispath = useDispatch();

  const handleChange = () => {
    setIsChecked(!isChecked);

    const payload = {
      name,
      checked: !isChecked,
    };

    dispath(currencyCheckedTogler(payload));
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
          checked={isChecked}
          onChange={handleChange}
        />
        <span className={classes.currensyItem__icon}>
          {checked ? '\u2605' : '\u2606'}
        </span>
      </div>
    </article>
  );
};
