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
  themeChecked: boolean;
}

export interface Rate {
  currencyName: string;
  currencyRate: number;
  checked?: boolean;
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
  CURRENCIES_SEARCH_END = 'CURRENCIES_SEARCH_END',
  CURRENCY_CHECKED_TOGLER = 'CURRENCY_CHECKED_TOGLER',
  THEME_CHECKED_TOGLER = 'THEME_CHECKED_TOGLER',
}
