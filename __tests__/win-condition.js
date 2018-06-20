import React from 'react'
const { BaseTile, LineTile, RickTile } = require('../src/tiles')

test('base tile loses', () => {
  expect((new BaseTile()).isWin(null)).toBe(false)
})

test('rick tile wins', () => {
  expect((new RickTile()).isWin(null)).toBe(true)
})

describe('line tile', () => {
  test('single line tile loses', () => {
    expect((new LineTile()).isWin(null)).toBe(false)
  })
})
