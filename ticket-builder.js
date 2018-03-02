'use strict';

exports.lottoNumbers = (inputSeries) => {
  let ticket = {};

  for (let i = 0; i < inputSeries.length; i++) {
    let numberString = inputSeries[i];

    try {
      ticket[numberString] = buildNumbers(numberString);
    } catch (error) {
      console.log('Not a valid number string "'+ numberString + '": ' + error.message);
    }
  }

  return ticket;
}

const buildNumbers = (numberString) => {

  if (numberString.length < 7) {
    throw new Error('Number string must have minimun 7 digit characters');
  }

  let ticketNumbers = new Set();
  let stashValue = '';

  const pushToTicket = (currentValue) => {
    if (stashValue) {
      pushDoubleDigitNumber(currentValue);
    } else {
      pushSingleDigitNumber(currentValue);
    }
  }

  const pushDoubleDigitNumber = (currentValue) => {
    let clubNumber = parseInt(stashValue + currentValue);

    if (ticketNumbers.has(clubNumber)) {
      pushSingleDigitNumber(stashValue);
      if (currentValue > '5') {
        pushSingleDigitNumber(currentValue)
      } else {
        stashValue = currentValue;
      }
    } else {
      ticketNumbers.add(clubNumber);
      stashValue = '';
    }
  }

  const pushSingleDigitNumber = (currentValue) => {
    let singleNumber = parseInt(currentValue);

    if (!ticketNumbers.has(singleNumber)) {
      ticketNumbers.add(singleNumber);
    }
    stashValue = '';
  }

  for (let i = 0; i < numberString.length; i++) {
    let currentValue = numberString[i];

    if (stashValue) {
      pushToTicket(currentValue);
    } else if (currentValue === '0') {
      continue;
    } else if (currentValue > '5') {
      pushToTicket(currentValue);
    } else if (numberString.length - i === ( 7 - ticketNumbers.size)) {
      pushToTicket(currentValue);
    }  else {
      stashValue = currentValue;
    }
  }

  if (ticketNumbers.size < 7) {
    throw new Error('Not enough digits in string to make 7 numbers');
  } else if (ticketNumbers.size > 7) {
    throw new Error('Excessive digits in string to make 7 numbers');
  }

  return ticketNumbers;
}
