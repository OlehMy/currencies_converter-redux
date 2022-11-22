import { all, spawn, StrictEffect } from 'redux-saga/effects';
import { currenciesSaga, currencyExchangeSaga } from './currencies';

export default function* rootSaga(): Generator<StrictEffect> {
  const sagas = [currenciesSaga, currencyExchangeSaga];

  yield all(sagas.map((s) => spawn(s)));
}
