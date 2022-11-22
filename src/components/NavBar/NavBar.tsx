import React from 'react';
import { PageNavLink } from '../PageNavLink';
import classes from './NavBar.module.scss';

export const NavBar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <PageNavLink
            to="currencies_converter-redux/"
            label="All currencies"
          />
        </li>
        <li className={classes.nav__item}>
          <PageNavLink
            to="currencies_converter-redux/my-currencies"
            label="My currencies"
          />
        </li>
      </ul>
    </nav>
  );
};
