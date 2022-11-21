import { AxiosError, AxiosResponse } from 'axios';

export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const LOAD_CURRENCIES_SUCCESS = 'LOAD_CURRENCIES_SUCCESS';
export const LOAD_CURRENCIES_FAILURE = 'LOAD_CURRENCIES_FAILURE';

export function loadCurrencies() {
  return { type: LOAD_CURRENCIES };
}

export function loadCurrenciesSucces(data: AxiosResponse) {
  return { type: LOAD_CURRENCIES_SUCCESS, payload: data };
}

export function loadCurrenciesFailure(error: AxiosError) {
  return { type: LOAD_CURRENCIES_FAILURE, payload: error };
}
