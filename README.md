# Currency Exchange App

#### This app converts currency value utilzing [exchange rate API.](https://www.exchangerate-api.com/)

#### By Roman Kolivashko

## Technologies Used:

* _HTML_
* _CSS_
* _JQuery_
* _webpack_
* _External API_
* _ESLint_
* _Postman_

## Description
This application will let user enter currency amount (U.S. dollars is default) and then choose which currency it should be converted to (such as Russian rubles, British pound, Canadian dollars, and so on). To determine the most recent exchange rate, the application will make an API call to the currency exchange API.

#### Note: before running this project, you will need to obtain an API kew from [ExchangeRate-API website](https://www.exchangerate-api.com/), signup, provide email, find "Get Free Key" option.

## Setup/Installation Requirements

1. Click on "Code" button at top of GitHub repository. 
2. Clone the repository: `$ git clone https://github.com/romankolivashko/currency_exchange_app.git`
3. Navigate to the currency_exchange_app/ directory on your computer
4. Create `.env` file in root level of your directory, append following to `.env` file: `API_KEY=<api_key> `. Note: `<api_key>` should be replaced with the actual key, obtained from [ExchangeRate-API website](https://www.exchangerate-api.com/).
5. To start a development server and run the project:
   * Navigate to currency_exchange_app/ in your command line
   * Run the command `npm install` to install dependencies
   * Optionally, run the commmand `npm run build` to make a bundle of the files
   * Finally, run the command `npm run start` to start a development server
 
## Known Bugs

* _None so far_

## License
MIT
## Contact Information
rkolivashko@gmail.com