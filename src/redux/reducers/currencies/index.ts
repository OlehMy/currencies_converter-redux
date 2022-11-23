import { Action, Actions, Currencies } from '../../../types';

const initialCurrenciesState: Currencies = {
  search: '',
  loading: false,
  error: '',
  base: 'EUR',
  amount: '100',
  exchangeResalt: 0,
  rates: [],
  filteredRates: [],
  themeChecked: false,
};

const formatRates = (rates: { [x: string]: number }) => {
  const ratesArray = [];

  for (const key in rates) {
    const rate = {
      currencyName: key,
      currencyRate: rates[key],
      checked: false,
    };
    ratesArray.push(rate);
  }

  return ratesArray;
};

export default function currenciesReduser(
  state = initialCurrenciesState,
  action: Action
) {
  switch (action.type) {
    case Actions.LOAD_CURRENCIES: {
      return {
        ...state,
        loading: true,
      };
    }

    case Actions.LOAD_CURRENCIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        search: '',
        rates: formatRates(action.payload.rates),
        filteredRates: formatRates(action.payload.rates),
      };
    }

    case Actions.LOAD_CURRENCIES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case Actions.LOAD_CURRENCY_EXCHANGE: {
      return {
        ...state,
        loading: true,
      };
    }

    case Actions.LOAD_CURRENCY_EXCHANGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        base: action.payload.query.from,
        amount: action.payload.query.amount,
        exchangeResalt: action.payload.result,
      };
    }

    case Actions.LOAD_CURRENCY_EXCHANGE_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case Actions.CURRENCIES_SEARCH: {
      return {
        ...state,
        loading: true,
      };
    }

    case Actions.CURRENCIES_SEARCH_END: {
      return {
        ...state,
        loading: false,
        search: action.payload.search,
        filteredRates: action.payload.filteredRates,
      };
    }

    case Actions.CURRENCY_CHECKED_TOGLER: {
      const rates = state.filteredRates;
      const { name, checked } = action.payload;
      const index = rates.findIndex((rate) => rate.currencyName === name);
      return {
        ...state,
        filteredRates: [...rates, (rates[index]['checked'] = checked)],
      };
    }

    case Actions.THEME_CHECKED_TOGLER: {
      const { checked } = action.payload;
      return {
        ...state,
        themeChecked: checked,
      };
    }

    default:
      return state;
  }
}
