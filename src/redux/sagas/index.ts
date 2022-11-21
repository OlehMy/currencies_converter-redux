import { all, spawn, StrictEffect } from 'redux-saga/effects';
import currenciesSaga from './currencies';

export default function* rootSaga(): Generator<StrictEffect> {
  const sagas = [currenciesSaga];

  yield all(sagas.map((s) => spawn(s)));
}
