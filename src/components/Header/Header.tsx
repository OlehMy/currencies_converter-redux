import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../types';
import { NavBar } from '../NavBar';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  const { themeChecked } = useSelector((store: Store) => store.currencies);

  return (
    <header
      className={classNames(classes.header, {
        [classes.header__nightTheme]: themeChecked,
      })}
    >
      <div className={classes.header__wrapper}>
        <NavBar />
      </div>
    </header>
  );
};
