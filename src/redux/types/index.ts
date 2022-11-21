export interface Store {
  currencies: Currencies;
}

export interface Currencies {
  search: string;
  loading: boolean;
  error: string;
  base: string;
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
