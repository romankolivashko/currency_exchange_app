export default class ExchangeService {  
  static async getRate(baseCurr, tgtCurr, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurr}/${tgtCurr}/${amount}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }

  static async getRateUSD() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/process.env.API_KEY/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }


}