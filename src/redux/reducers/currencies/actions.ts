import { AxiosError, AxiosResponse } from 'axios';
import { Rate } from '../../types';

export const LOAD_CURRENCIES = 'LOAD_CURRENCIES';
export const LOAD_CURRENCIES_SUCCESS = 'LOAD_CURRENCIES_SUCCESS';
export const LOAD_CURRENCIES_FAILURE = 'LOAD_CURRENCIES_FAILURE';
export const CURRENCIES_SEARCH = 'CURRENCIES_SEARCH';

export function loadCurrencies() {
  return { type: LOAD_CURRENCIES };
}

export function loadCurrenciesSucces(data: AxiosResponse) {
  return { type: LOAD_CURRENCIES_SUCCESS, payload: data };
}

export function loadCurrenciesFailure(error: AxiosError) {
  return { type: LOAD_CURRENCIES_FAILURE, payload: error };
}

export function currenciesSearch(filteredRates: Rate[], search: string) {
  return { type: CURRENCIES_SEARCH, payload: { filteredRates, search } };
}
