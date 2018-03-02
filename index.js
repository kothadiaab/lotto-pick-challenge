'use strict';

const ticketBuilder = require('./ticket-builder.js');

// Update inputSeries to test different strings
let inputSeries = [
  '569815571556',
  '4938532894754',
  '1234567',
  '76543021',
  '472844278465445'
];

let winningTicket = ticketBuilder.lottoNumbers(inputSeries);

console.log(winningTicket);
