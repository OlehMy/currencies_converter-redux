import axios from 'axios';

const URL = 'https://api.exchangerate.host';

export const getCurrencies: () => Promise<any> = async () => {
  const currenciesResponse = await axios.get(`${URL}/latest`);

  return currenciesResponse.data;
};
