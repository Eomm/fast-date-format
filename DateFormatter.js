'use strict';

var months = require('./lib/months').months;
var monthsShort = require('./lib/months').monthsShort;
var days = require('./lib/days').days;
var daysShort = require('./lib/days').daysShort;
var dayCount = require('./lib/days').dayCount;
var tokenizer = require('./lib/tokenizer');

function DateFormatter() {
  this.formatters = {};
}

DateFormatter.prototype.format = function format(dateFormat, date) {
  if (!date) {
    date = new Date();
  }
  if (!this.formatters[dateFormat]) {
    this.formatters[dateFormat] = buildFormatter(dateFormat);
  }
  return this.formatters[dateFormat](
    date,
    padZero2,
    padZero3,
    getDayOfYear,
    daysShort,
    days,
    monthsShort,
    months,
    dayCount
  );
}

function buildFormatter(dateFormat) {
  var tokens = tokenizer.tokenize(dateFormat);
  var functionString = 'return `' + tokens.map(processToken).join('') + '`';
  
  return Function(
    'now',
    'padZero2',
    'padZero3',
    'getDayofYear',
    'daysShort',
    'days',
    'monthsShort',
    'months',
    'dayCount',
    functionString
  );
}

var tokenToReplacement = {
  ZZ: '${now.getTimezoneOffset() >= 0 ? \'+\':\'-\'}${padZero2(Math.abs(Math.floor(now.getTimezoneOffset() / 60)))}:${padZero2(now.getTimezoneOffset() % 60)}',
  Z: '${now.getTimezoneOffset() >= 0 ? \'+\':\'-\'}${padZero2(Math.abs(Math.floor(now.getTimezoneOffset() / 60)))}${padZero2(now.getTimezoneOffset() % 60)}',
  SSS: '${padZero3(now.getMilliseconds())}',
  ss: '${padZero2(now.getSeconds())}',
  s: '${now.getSeconds()}',
  mm: '${padZero2(now.getMinutes())}',
  m: '${now.getMinutes()}',
  E: '${now.getDay() + 1}',
  dddd: '${days[now.getDay()]}',
  ddd: '${daysShort[now.getDay()]}',
  x: '${padZero2(now.getTime())}',
  HH: '${padZero2(now.getHours())}',
  H: '${now.getHours()}',
  hh: '${padZero2(now.getHours() % 12 != 0 ? now.getHours() % 12 : 12)}',
  h: '${(now.getHours() % 12 != 0 ? now.getHours() % 12 : 12)}',
  kk: '${padZero2(now.getHours() + 1)}',
  k: '${now.getHours() + 1}',
  A: '${now.getHours() < 12 ? \'am\' : \'pm\'}',
  DDDD: '${padZero3(getDayofYear(dayCount, now))}',
  DDD: '${getDayofYear(dayCount, now)}',
  DD: '${padZero2(now.getDate())}',
  D: '${now.getDate()}',
  MMMM: '${months[now.getMonth()]}',
  MMM: '${monthsShort[now.getMonth()]}',
  MM: '${padZero2(now.getMonth() + 1)}',
  M: '${now.getMonth() + 1}',
  YYYY: '${now.getFullYear()}',
  YY: '${now.getFullYear().toString().substring(2)}'
}

function processToken(token) {
  if (tokenToReplacement[token]) {
    return tokenToReplacement[token];
  }
  return token;
}

function padZero2(integer) {
  if (integer > 9) {
    return integer;
  }
  return `0${integer}`;
}

function padZero3(integer) {
  if (integer > 99) {
    return integer;
  }
  if (integer > 9) {
    return `0${integer}`;
  }
  return `00${integer}`;
}

function getDayOfYear(dayCount, now) {
  var month = now.getMonth();
  var date = now.getDate();
  var dayOfYear = dayCount[month] + date;

  var year = now.getFullYear();
  var isLeapYear;
  if(year % 4 !== 0) {
    isLeapYear = false;
  } else {
    isLeapYear = year % 100 !== 0 || year % 400 === 0;
  }

  if(month > 1 && isLeapYear) {
    dayOfYear++;
  }
  return dayOfYear;
}

module.exports = DateFormatter;
