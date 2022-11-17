import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import classes from './PageNavLink.module.scss';

type Props = {
  to: string;
  label: string;
};

export const PageNavLink: React.FC<Props> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classNames(classes.navLink, { [classes.isActive]: isActive })
    }
  >
    {label}
  </NavLink>
);
