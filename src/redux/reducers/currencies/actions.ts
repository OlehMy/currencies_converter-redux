import { AxiosError, AxiosResponse } from 'axios';
import { Actions } from '../../../types';

export function loadCurrencies() {
  return { type: Actions.LOAD_CURRENCIES };
}

export function loadCurrenciesSucces(data: AxiosResponse) {
  return { type: Actions.LOAD_CURRENCIES_SUCCESS, payload: data };
}

export function loadCurrenciesFailure(error: AxiosError) {
  return { type: Actions.LOAD_CURRENCIES_FAILURE, payload: error };
}

export function loadCurrencyExchange(data: any) {
  return { type: Actions.LOAD_CURRENCY_EXCHANGE, payload: data };
}

export function loadCurrencyExchangeSucces(data: AxiosResponse) {
  return { type: Actions.LOAD_CURRENCY_EXCHANGE_SUCCESS, payload: data };
}

export function loadCurrencyExchangeFailure(error: AxiosError) {
  return { type: Actions.LOAD_CURRENCY_EXCHANGE_FAILURE, payload: error };
}

export function currenciesSearch(data: any) {
  return { type: Actions.CURRENCIES_SEARCH, payload: data };
}

export function currenciesSearchEnd(data: any) {
  return { type: Actions.CURRENCIES_SEARCH_END, payload: data };
}

export function currencyCheckedTogler(data: any) {
  return { type: Actions.CURRENCY_CHECKED_TOGLER, payload: data };
}

export function themeCheckedTogler(data: any) {
  return { type: Actions.THEME_CHECKED_TOGLER, payload: data };
}
