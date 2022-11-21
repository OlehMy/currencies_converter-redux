import { combineReducers } from 'redux';
import currenciesReduser from './currencies';

const rootReducer = combineReducers({
  currencies: currenciesReduser,
});

export default rootReducer;
