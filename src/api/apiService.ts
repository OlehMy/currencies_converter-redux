import axios from 'axios';

const URL = 'https://api.exchangerate.host';

export const getCurrencies: () => Promise<any> = async () => {
  const currenciesResponse = await axios.get(`${URL}/latest`);

  return currenciesResponse.data;
};

export const getCurrencyExchange: (payload: any) => Promise<any> = async (
  payload
) => {
  const { from, to, amount } = payload;

  const currenciesResponse = await axios.get(`${URL}/convert`, {
    params: {
      from,
      to,
      amount,
    },
  });

  return currenciesResponse.data;
};
