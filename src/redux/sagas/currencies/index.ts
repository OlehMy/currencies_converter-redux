import axios, { AxiosResponse } from 'axios';
import {
  call,
  put,
  StrictEffect,
  takeEvery,
  // takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { getCurrencies, getCurrencyExchange } from '../../../api/apiService';
import {
  loadCurrenciesFailure,
  loadCurrenciesSucces,
  loadCurrencyExchangeFailure,
  loadCurrencyExchangeSucces,
} from '../../reducers/currencies/actions';
import { Action, Actions } from '../../types';

export function* loadCurrenciesList(): Generator<StrictEffect> {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data: AxiosResponse = yield call(getCurrencies);

    yield put(loadCurrenciesSucces(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(loadCurrenciesFailure(error));
    }
  }
}

export function* currenciesSaga(): Generator<StrictEffect> {
  yield takeLatest(Actions.LOAD_CURRENCIES, loadCurrenciesList);
}

export function* loadCurrency(data: Action): Generator<StrictEffect> {
  const { payload } = data;

  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data: AxiosResponse = yield call(getCurrencyExchange, payload);

    yield put(loadCurrencyExchangeSucces(data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      yield put(loadCurrencyExchangeFailure(error));
    }
  }
}

export function* currencyExchangeSaga(): Generator<StrictEffect> {
  yield takeEvery(Actions.LOAD_CURRENCY_EXCHANGE, loadCurrency);
}

// export function* filterCurrenciesList(data: Action): Generator<StrictEffect> {
//   yield put(currenciesSearch(data));
// }

// export function* filterCurrenciesSaga(): Generator<StrictEffect> {
//   yield takeEvery(Actions.CURRENCIES_SEARCH, filterCurrenciesList);
// }
