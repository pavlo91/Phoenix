// Bootstrap JS
const bootstrap = require('bootstrap');

// Charts
const apexChartOne = require('./apex-charts/line');
const apexChartTwo = require('./apex-charts/bar');
const apexChartThree = require('./apex-charts/bar-stacked');
const apexChartFour = require('./apex-charts/crypto-price');
const apexChartSpark = require('./apex-charts/spark');

// Libs
const datepicker = require('./libs/datepicker');
const choicesPlugin = require('./libs/choices');

document.addEventListener('DOMContentLoaded', () => {

  // Tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
  	return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // Popover
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
  	return new bootstrap.Popover(popoverTriggerEl)
  })

  // Line chart
  const chartOneEl = document.querySelector("#chart-line");
  if (chartOneEl) {
    new apexChartOne().init(chartOneEl);
  }

  // Bar chart
  const chartTwoEl = document.querySelector("#chart-bar");
  if (chartTwoEl) {
    new apexChartTwo().init(chartTwoEl);
  }

  // Users chart
  const chartThreeEl = document.querySelector("#chart-users");
  if (chartThreeEl) {
    new apexChartThree().init(chartThreeEl);
  }

  // Users chart
  const chartFourEl = document.querySelector("#chart-crypto-price");
  if (chartFourEl) {
    new apexChartFour().init(chartFourEl);
  }

  // Spark chart
  const sparkChartsEl = document.querySelectorAll("[data-toggle='spark-chart']");
  if (sparkChartsEl) {
    Array.prototype.forEach.call(sparkChartsEl, function(el) {
      new apexChartSpark().init(el);
    })
  }

  // Datepicker
  const dateRangePickerEl = document.querySelector(".daterangepicker");
  if (dateRangePickerEl) {
    new datepicker().range('.daterangepicker');
  }

  const datepickerEl = document.querySelector(".datepicker");
  if (datepickerEl) {
    new datepicker().init('.datepicker');
  }

  const choicesEl = document.querySelector(".js-choice");
  if (choicesEl) {
    new choicesPlugin().init();
  }
});
