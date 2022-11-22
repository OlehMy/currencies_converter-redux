import axios from 'axios';

const URL = 'https://api.exchangerate.host';

export const getCurrencies: () => Promise<any> = async () => {
  const currenciesResponse = await axios.get(`${URL}/latest`);
  console.log('currenciesResponse: ', currenciesResponse);

  return currenciesResponse.data;
};

export const getCurrencyExchange: (payload: any) => Promise<any> = async (
  payload
) => {
  const { from, to, amount } = payload;
  console.log('payload: ', payload);
  const currenciesResponse = await axios.get(`${URL}/convert`, {
    params: {
      from,
      to,
      amount,
    },
  });

  console.log('currenciesResponse: ', currenciesResponse.data.result);
  return currenciesResponse.data;
};
