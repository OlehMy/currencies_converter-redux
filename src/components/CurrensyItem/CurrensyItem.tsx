import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currencyCheckedTogler } from '../../redux/reducers/currencies/actions';
import classes from './CurrensyItem.module.scss';
import classNames from 'classnames';

type Props = {
  name: string;
  checked: boolean | undefined;
};

export const CurrensyItem: React.FC<Props> = ({ name, checked }) => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(checked);
  const dispath = useDispatch();

  const handleChange = () => {
    setIsChecked(!isChecked);

    const payload = {
      name,
      checked: !isChecked,
    };

    dispath(currencyCheckedTogler(payload));

    const myCurrencies = localStorage.myCurrencies
      ? JSON.parse(localStorage.myCurrencies)
      : [];
    const index = myCurrencies.findIndex(
      (currency: string) => currency === name
    );

    if (index > -1) {
      myCurrencies.splice(index, 1);
    } else {
      myCurrencies.push(name);
    }

    localStorage.myCurrencies = JSON.stringify(myCurrencies);
  };

  return (
    <article
      className={classNames(classes.currensyItem, {
        [classes.currensyItem__isActive]: isChecked,
      })}
    >
      <button
        onClick={() => navigate(name)}
        className={classes.currensyItem__button}
      >
        {name}
      </button>
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
