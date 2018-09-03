'use strict'

var t = require('tap')
var test = t.test
var DateFormatter = require('..')

test('HH', (t) => {
  t.plan(24)
  testFormatHour(t, 'HH', 0, '00')
  testFormatHour(t, 'HH', 1, '01')
  testFormatHour(t, 'HH', 2, '02')
  testFormatHour(t, 'HH', 3, '03')
  testFormatHour(t, 'HH', 4, '04')
  testFormatHour(t, 'HH', 5, '05')
  testFormatHour(t, 'HH', 6, '06')
  testFormatHour(t, 'HH', 7, '07')
  testFormatHour(t, 'HH', 8, '08')
  testFormatHour(t, 'HH', 9, '09')
  testFormatHour(t, 'HH', 10, '10')
  testFormatHour(t, 'HH', 11, '11')
  testFormatHour(t, 'HH', 12, '12')
  testFormatHour(t, 'HH', 13, '13')
  testFormatHour(t, 'HH', 14, '14')
  testFormatHour(t, 'HH', 15, '15')
  testFormatHour(t, 'HH', 16, '16')
  testFormatHour(t, 'HH', 17, '17')
  testFormatHour(t, 'HH', 18, '18')
  testFormatHour(t, 'HH', 19, '19')
  testFormatHour(t, 'HH', 20, '20')
  testFormatHour(t, 'HH', 21, '21')
  testFormatHour(t, 'HH', 22, '22')
  testFormatHour(t, 'HH', 23, '23')
})

test('H', (t) => {
  t.plan(24)
  testFormatHour(t, 'H', 0, '0')
  testFormatHour(t, 'H', 1, '1')
  testFormatHour(t, 'H', 2, '2')
  testFormatHour(t, 'H', 3, '3')
  testFormatHour(t, 'H', 4, '4')
  testFormatHour(t, 'H', 5, '5')
  testFormatHour(t, 'H', 6, '6')
  testFormatHour(t, 'H', 7, '7')
  testFormatHour(t, 'H', 8, '8')
  testFormatHour(t, 'H', 9, '9')
  testFormatHour(t, 'H', 10, '10')
  testFormatHour(t, 'H', 11, '11')
  testFormatHour(t, 'H', 12, '12')
  testFormatHour(t, 'H', 13, '13')
  testFormatHour(t, 'H', 14, '14')
  testFormatHour(t, 'H', 15, '15')
  testFormatHour(t, 'H', 16, '16')
  testFormatHour(t, 'H', 17, '17')
  testFormatHour(t, 'H', 18, '18')
  testFormatHour(t, 'H', 19, '19')
  testFormatHour(t, 'H', 20, '20')
  testFormatHour(t, 'H', 21, '21')
  testFormatHour(t, 'H', 22, '22')
  testFormatHour(t, 'H', 23, '23')
})

test('kk', (t) => {
  t.plan(24)
  testFormatHour(t, 'kk', 0, '01')
  testFormatHour(t, 'kk', 1, '02')
  testFormatHour(t, 'kk', 2, '03')
  testFormatHour(t, 'kk', 3, '04')
  testFormatHour(t, 'kk', 4, '05')
  testFormatHour(t, 'kk', 5, '06')
  testFormatHour(t, 'kk', 6, '07')
  testFormatHour(t, 'kk', 7, '08')
  testFormatHour(t, 'kk', 8, '09')
  testFormatHour(t, 'kk', 9, '10')
  testFormatHour(t, 'kk', 10, '11')
  testFormatHour(t, 'kk', 11, '12')
  testFormatHour(t, 'kk', 12, '13')
  testFormatHour(t, 'kk', 13, '14')
  testFormatHour(t, 'kk', 14, '15')
  testFormatHour(t, 'kk', 15, '16')
  testFormatHour(t, 'kk', 16, '17')
  testFormatHour(t, 'kk', 17, '18')
  testFormatHour(t, 'kk', 18, '19')
  testFormatHour(t, 'kk', 19, '20')
  testFormatHour(t, 'kk', 20, '21')
  testFormatHour(t, 'kk', 21, '22')
  testFormatHour(t, 'kk', 22, '23')
  testFormatHour(t, 'kk', 23, '24')
})

test('k', (t) => {
  t.plan(24)
  testFormatHour(t, 'k', 0, '1')
  testFormatHour(t, 'k', 1, '2')
  testFormatHour(t, 'k', 2, '3')
  testFormatHour(t, 'k', 3, '4')
  testFormatHour(t, 'k', 4, '5')
  testFormatHour(t, 'k', 5, '6')
  testFormatHour(t, 'k', 6, '7')
  testFormatHour(t, 'k', 7, '8')
  testFormatHour(t, 'k', 8, '9')
  testFormatHour(t, 'k', 9, '10')
  testFormatHour(t, 'k', 10, '11')
  testFormatHour(t, 'k', 11, '12')
  testFormatHour(t, 'k', 12, '13')
  testFormatHour(t, 'k', 13, '14')
  testFormatHour(t, 'k', 14, '15')
  testFormatHour(t, 'k', 15, '16')
  testFormatHour(t, 'k', 16, '17')
  testFormatHour(t, 'k', 17, '18')
  testFormatHour(t, 'k', 18, '19')
  testFormatHour(t, 'k', 19, '20')
  testFormatHour(t, 'k', 20, '21')
  testFormatHour(t, 'k', 21, '22')
  testFormatHour(t, 'k', 22, '23')
  testFormatHour(t, 'k', 23, '24')
})

test('hh', (t) => {
  t.plan(24)
  testFormatHour(t, 'hh', 0, '12')
  testFormatHour(t, 'hh', 1, '01')
  testFormatHour(t, 'hh', 2, '02')
  testFormatHour(t, 'hh', 3, '03')
  testFormatHour(t, 'hh', 4, '04')
  testFormatHour(t, 'hh', 5, '05')
  testFormatHour(t, 'hh', 6, '06')
  testFormatHour(t, 'hh', 7, '07')
  testFormatHour(t, 'hh', 8, '08')
  testFormatHour(t, 'hh', 9, '09')
  testFormatHour(t, 'hh', 10, '10')
  testFormatHour(t, 'hh', 11, '11')
  testFormatHour(t, 'hh', 12, '12')
  testFormatHour(t, 'hh', 13, '01')
  testFormatHour(t, 'hh', 14, '02')
  testFormatHour(t, 'hh', 15, '03')
  testFormatHour(t, 'hh', 16, '04')
  testFormatHour(t, 'hh', 17, '05')
  testFormatHour(t, 'hh', 18, '06')
  testFormatHour(t, 'hh', 19, '07')
  testFormatHour(t, 'hh', 20, '08')
  testFormatHour(t, 'hh', 21, '09')
  testFormatHour(t, 'hh', 22, '10')
  testFormatHour(t, 'hh', 23, '11')
})

test('h', (t) => {
  t.plan(24)
  testFormatHour(t, 'h', 0, '12')
  testFormatHour(t, 'h', 1, '1')
  testFormatHour(t, 'h', 2, '2')
  testFormatHour(t, 'h', 3, '3')
  testFormatHour(t, 'h', 4, '4')
  testFormatHour(t, 'h', 5, '5')
  testFormatHour(t, 'h', 6, '6')
  testFormatHour(t, 'h', 7, '7')
  testFormatHour(t, 'h', 8, '8')
  testFormatHour(t, 'h', 9, '9')
  testFormatHour(t, 'h', 10, '10')
  testFormatHour(t, 'h', 11, '11')
  testFormatHour(t, 'h', 12, '12')
  testFormatHour(t, 'h', 13, '1')
  testFormatHour(t, 'h', 14, '2')
  testFormatHour(t, 'h', 15, '3')
  testFormatHour(t, 'h', 16, '4')
  testFormatHour(t, 'h', 17, '5')
  testFormatHour(t, 'h', 18, '6')
  testFormatHour(t, 'h', 19, '7')
  testFormatHour(t, 'h', 20, '8')
  testFormatHour(t, 'h', 21, '9')
  testFormatHour(t, 'h', 22, '10')
  testFormatHour(t, 'h', 23, '11')
})

test('A', (t) => {
  t.plan(24)
  testAmPm(t, 0, 'am')
  testAmPm(t, 1, 'am')
  testAmPm(t, 2, 'am')
  testAmPm(t, 3, 'am')
  testAmPm(t, 4, 'am')
  testAmPm(t, 5, 'am')
  testAmPm(t, 6, 'am')
  testAmPm(t, 7, 'am')
  testAmPm(t, 8, 'am')
  testAmPm(t, 9, 'am')
  testAmPm(t, 10, 'am')
  testAmPm(t, 11, 'am')
  testAmPm(t, 12, 'pm')
  testAmPm(t, 13, 'pm')
  testAmPm(t, 14, 'pm')
  testAmPm(t, 15, 'pm')
  testAmPm(t, 16, 'pm')
  testAmPm(t, 17, 'pm')
  testAmPm(t, 18, 'pm')
  testAmPm(t, 19, 'pm')
  testAmPm(t, 20, 'pm')
  testAmPm(t, 21, 'pm')
  testAmPm(t, 22, 'pm')
  testAmPm(t, 23, 'pm')
})

test('H', (t) => {
  t.plan(1)
  var date = new Date(2000, 2, 1, 3, 4, 5, 1)
  var dateFormatter = new DateFormatter()

  var formatted = dateFormatter.format('H', date)

  t.strictEquals(formatted, '3')
})

function testFormatHour (t, format, hour, h) {
  var date = new Date(2000, 2, 1, hour, 4, 5, 1)
  var dateFormatter = new DateFormatter()
  var formatted = dateFormatter.format(format, date)
  t.strictEquals(formatted, h)
}

function testAmPm (t, hour, aPM) {
  var date = new Date(2000, 2, 1, hour, 4, 5, 1)
  var dateFormatter = new DateFormatter()
  var formatted = dateFormatter.format('A', date)
  t.strictEquals(formatted, aPM)
}
