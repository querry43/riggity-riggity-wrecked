import React from 'react'
import { BaseTile, LineTile, RickTile, StartTile, TermTile } from '../src/tiles'

test('base tile loses', () => {
  expect((new BaseTile()).isWin(null)).toBe(false)
})

test('rick tile wins', () => {
  expect((new RickTile()).isWin(null)).toBe(true)
})

test('swapWithTile', () => {
  const tiles = [
    new BaseTile(),
    new BaseTile(),
    new BaseTile(),
    new BaseTile(),
    new BaseTile(),
  ]
  const t = new BaseTile()

  tiles[0].up = tiles[1]
  tiles[1].down = tiles[0]

  tiles[0].right = tiles[2]
  tiles[2].left = tiles[0]

  tiles[0].down = tiles[3]
  tiles[3].up = tiles[0]

  tiles[0].left = tiles[4]
  tiles[4].right = tiles[0]

  expect(tiles[0].up.down).toBe(tiles[0])
  expect(t.up).toBeInstanceOf(TermTile)

  tiles[0].swapWithTile(t)

  expect(tiles[0].up).toBeInstanceOf(TermTile)
  expect(tiles[0].right).toBeInstanceOf(TermTile)
  expect(tiles[0].down).toBeInstanceOf(TermTile)
  expect(tiles[0].left).toBeInstanceOf(TermTile)

  expect(t.up.down).toBe(t)
  expect(t.right.left).toBe(t)
  expect(t.down.up).toBe(t)
  expect(t.left.right).toBe(t)
})

describe('start tile', () => {
  test('single tile loses', () => {
    expect((new StartTile()).isWin(null)).toBe(false)
  })

  test('with non-right rick tile loses', () => {
    const tiles = [
      new StartTile(),
      new RickTile()
    ]

    tiles[0].up = tiles[1]
    tiles[1].down = tiles[0]

    tiles[0].down = tiles[1]
    tiles[1].up = tiles[0]

    tiles[0].left = tiles[1]
    tiles[1].right = tiles[0]

    expect(tiles[0].isWin(null)).toBe(false)
  })

  test('with right rick tile wins', () => {
    const tiles = [
      new StartTile(),
      new RickTile()
    ]

    tiles[0].right = tiles[1]
    tiles[1].left = tiles[0]

    expect(tiles[0].isWin(null)).toBe(true)
  })
})

describe('line tile', () => {
  test('single tile loses', () => {
    expect((new LineTile(false, 10, 1)).isWin(null)).toBe(false)
  })

  test('tile 10 wins', () => {
    const tiles = [
      new StartTile(),
      new LineTile(false, 10, 1),
      new RickTile()
    ]

    tiles[0].right = tiles[1]
    tiles[1].left = tiles[0]

    tiles[1].right = tiles[2]
    tiles[2].left = tiles[1]

    expect(tiles[0].isWin(null)).toBe(true)
  })

  test('tile 11 wins', () => {
    const tiles = [
      new LineTile(false, 11, 1),
      new RickTile()
    ]

    tiles[0].down = tiles[1]
    tiles[1].up = tiles[0]

    expect(tiles[0].isWin(tiles[0].up)).toBe(true)
  })

  test('tile 12 wins', () => {
    const tiles = [
      new LineTile(false, 12, 1),
      new RickTile()
    ]

    tiles[0].right = tiles[1]
    tiles[1].left = tiles[0]

    expect(tiles[0].isWin(tiles[0].up)).toBe(true)
  })

  test('tile 13 wins', () => {
    const tiles = [
      new LineTile(false, 13, 1),
      new RickTile()
    ]

    tiles[0].right = tiles[1]
    tiles[1].left = tiles[0]

    expect(tiles[0].isWin(tiles[0].down)).toBe(true)
  })

  test('tile 14 wins', () => {
    const tiles = [
      new LineTile(false, 14, 1),
      new RickTile()
    ]

    tiles[0].down = tiles[1]
    tiles[1].up = tiles[0]

    expect(tiles[0].isWin(tiles[0].left)).toBe(true)
  })

  test('tile 15 wins', () => {
    const tiles = [
      new LineTile(false, 15, 1),
      new RickTile()
    ]

    tiles[0].up = tiles[1]
    tiles[1].down = tiles[0]

    expect(tiles[0].isWin(tiles[0].left)).toBe(true)
  })
})
