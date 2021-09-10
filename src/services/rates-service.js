export default class ExchangeService {  
  static async getRate(baseCurr, tgtCurr, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurr}/${tgtCurr}/${amount}`);
      if (!response.ok) {
        let errCode = response.status;
        throw Error(errCode);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}