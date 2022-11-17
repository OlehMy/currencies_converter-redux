import React from 'react';
import { NavBar } from '../NavBar';
import classes from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <NavBar />
      </div>
    </header>
  );
};
