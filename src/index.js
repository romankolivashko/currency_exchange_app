import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/rates-service.js';

function clearFields() {
  //$('#base-amount').val("");
  $('#tgt-amount').val("");
  $('.showErrors').text("");
  //$('.showRate').text("");
}

function getElements(response) {
  if (response) {
    //$('.showRate').text(`Converting from ${response.base_code} to ${response.target_code} will yield ${response.conversion_result}`);
    //$('#base-amount').val(response.conversion_rates);
    console.log(response.result);
    $('#tgt-amount').val(response.conversion_result.toFixed(2));

  } else {
    console.log(response.result);
    console.dir(response);
    $('.showErrors').text(`Oh no, this is embarrasing! Let's try again. ${response.result}`);
  }
}

async function makeApiCall(baseCurr, tgtCurr, amount) {
  const response = await ExchangeService.getRate(baseCurr, tgtCurr, amount);
  getElements(response);
}

$(document).ready(function() {
  $('#getRates').click(function() {
    let baseCurr = $('#base-curr').val();
    let tgtCurr = $('#tgt-curr').val();
    let amount = $('#base-amount').val();
    //$('#base-amount').val(amount);
    clearFields();
    makeApiCall(baseCurr, tgtCurr, amount);
  });
});