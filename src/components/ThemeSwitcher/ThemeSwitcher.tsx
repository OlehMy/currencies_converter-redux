import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'pretty-checkbox-react';
import { themeCheckedTogler } from '../../redux/reducers/currencies/actions';
import '@djthoms/pretty-checkbox';
import classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispath = useDispatch();

  const handleChange = () => {
    setIsChecked(!isChecked);

    const payload = {
      checked: !isChecked,
    };

    dispath(themeCheckedTogler(payload));
  };

  return (
    <div className={classes.themeSwitcher}>
      <span className={classes.themeSwitcher__dayIcon}>{'\u263C'}</span>
      <Switch checked={isChecked} onChange={handleChange}></Switch>
      <span className={classes.themeSwitcher__nightIcon}>{'\u263E'}</span>
    </div>
  );
};
