export interface Store {
  currencies: Currencies;
}

export interface Currencies {
  search: string;
  loading: boolean;
  error: string;
  base: string;
  amount: string;
  exchangeResalt: number;
  rates: Rate[];
  filteredRates: Rate[];
}

export interface Rate {
  currencyName: string;
  currencyRate: number;
}

export interface Action {
  type: string;
  payload: any;
}

export enum Actions {
  LOAD_CURRENCIES = 'LOAD_CURRENCIES',
  LOAD_CURRENCIES_SUCCESS = 'LOAD_CURRENCIES_SUCCESS',
  LOAD_CURRENCIES_FAILURE = 'LOAD_CURRENCIES_FAILURE',
  LOAD_CURRENCY_EXCHANGE = 'LOAD_CURRENCY_EXCHANGE',
  LOAD_CURRENCY_EXCHANGE_SUCCESS = 'LOAD_CURRENCY_EXCHANGE_SUCCESS',
  LOAD_CURRENCY_EXCHANGE_FAILURE = 'LOAD_CURRENCY_EXCHANGE_FAILURE',
  CURRENCIES_SEARCH = 'CURRENCIES_SEARCH',
}
