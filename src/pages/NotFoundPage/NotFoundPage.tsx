import React from 'react';
import classes from './NotFoundPage.module.scss';
import NotFoundImg from '../../styles/img/not-found.gif';

export const NotFoundPage: React.FC = () => (
  <section className={classes.notFound}>
    <img src={NotFoundImg} alt="not-found.gif" />
    <h1 className={classes.notFound__title}>Page Not Found</h1>
  </section>
);
