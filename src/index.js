import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeService from "./services/rates-service.js";

function clearFields() {
  $("#tgt-amount").val("");
  $(".showErrors").text("");
}

function getElements(response) {
  if (response.result === "success") {
    $("#tgt-amount").val(response.conversion_result.toFixed(2));
  } else {
    $(".showErrors").text(`This is embarrassing! Code: ${response}`);
  }
}

async function makeApiCall(baseCurr, tgtCurr, amount) {
  const response = await ExchangeService.getRate(baseCurr, tgtCurr, amount);
  getElements(response);
}

$("#getRates").click(function () {
  let baseCurr = $("#base-curr").val();
  let tgtCurr = $("#tgt-curr").val();
  let amount = $("#base-amount").val();
  clearFields();
  makeApiCall(baseCurr, tgtCurr, amount);
});
