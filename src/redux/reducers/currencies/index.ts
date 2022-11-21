import { Action, Currencies } from '../../types';
import {
  LOAD_CURRENCIES,
  LOAD_CURRENCIES_FAILURE,
  LOAD_CURRENCIES_SUCCESS,
} from './actions';

const initialCurrenciesState: Currencies = {
  search: '',
  loading: false,
  error: '',
  base: '',
  rates: [],
};

const formatRates = (rates: { [x: string]: number }) => {
  const ratesArray = [];

  for (const key in rates) {
    const z = { currencyName: key, currencyRate: rates[key] };
    ratesArray.push(z);
  }

  return ratesArray;
};

export default function currenciesReduser(
  state = initialCurrenciesState,
  action: Action
) {
  switch (action.type) {
    case LOAD_CURRENCIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_CURRENCIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        base: action.payload.base,
        rates: formatRates(action.payload.rates),
      };
    }

    case LOAD_CURRENCIES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
