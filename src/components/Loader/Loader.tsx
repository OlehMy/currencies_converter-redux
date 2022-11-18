import React from 'react';
import classes from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__wrapper}>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
        <div className={classes.loader__item}></div>
      </div>
    </div>
  );
};
