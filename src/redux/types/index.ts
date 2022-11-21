export interface Store {
  currencies: Currencies;
}

export interface Currencies {
  search: string;
  loading: boolean;
  error: string;
  base: string;
  rates: Rate[];
}

export interface Rate {
  currencyName: string;
  currencyRate: number;
}

export interface Action {
  type: string;
  payload: any;
}
