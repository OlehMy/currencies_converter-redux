import axios, { AxiosResponse } from 'axios';
import { call, put, StrictEffect, takeLatest } from 'redux-saga/effects';
import { getCurrencies } from '../../../api/apiService';
import {
  LOAD_CURRENCIES,
  loadCurrenciesFailure,
  loadCurrenciesSucces,
} from '../../reducers/currencies/actions';

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

export default function* currenciesSaga(): Generator<StrictEffect> {
  yield takeLatest(LOAD_CURRENCIES, loadCurrenciesList);
}
