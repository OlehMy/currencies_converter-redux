import React from 'react';
import { PageNavLink } from '../PageNavLink';
import { ThemeSwitcher } from '../ThemeSwitcher';
import classes from './NavBar.module.scss';

export const NavBar: React.FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className={classes.nav__item}>
          <PageNavLink to="/" label="All currencies" />
        </li>
        <li className={classes.nav__item}>
          <PageNavLink to="/my-currencies" label="My currencies" />
        </li>
      </ul>
      <ThemeSwitcher />
    </nav>
  );
};
