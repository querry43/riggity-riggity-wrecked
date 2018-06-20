import React from 'react'
import Board from '../src/board'
import { BaseTile, LineTile, RickTile, StartTile } from '../src/tiles'

test('construct board', () => {
  const map = [
    0,  1,  2,  3,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
    0, 10, 11, 12, 13, 14, 15,
    0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
  ]

  const b = new Board(map)

  expect(b.firstTile).toBe(b.firstTile.right.left)
  expect(b.firstTile).toBe(b.firstTile.down.up)

  let tile = b.firstTile
  expect(tile.type).toBe(0)
  expect(tile.draggable).toBeFalsy()
  expect(tile).toBeInstanceOf(BaseTile)

  tile = tile.right
  expect(tile.type).toBe(1)
  expect(tile.draggable).toBeFalsy()
  expect(tile).toBeInstanceOf(StartTile)

  tile = tile.right
  expect(tile.type).toBe(2)
  expect(tile.draggable).toBeFalsy()
  expect(tile).toBeInstanceOf(RickTile)

  tile = tile.right
  expect(tile.type).toBe(3)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(BaseTile)


  tile = b.firstTile.down.down.right
  expect(tile.type).toBe(10)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(LineTile)

  tile = tile.right
  expect(tile.type).toBe(11)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(LineTile)

  tile = tile.right
  expect(tile.type).toBe(12)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(LineTile)

  tile = tile.right
  expect(tile.type).toBe(13)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(LineTile)

  tile = tile.right
  expect(tile.type).toBe(14)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(LineTile)

  tile = tile.right
  expect(tile.type).toBe(15)
  expect(tile.draggable).toBeTruthy()
  expect(tile).toBeInstanceOf(LineTile)
})

test('as component', () => {
  const map = [
    0,  1,  2,  3,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
    0, 10, 11, 12, 13, 14, 15,
    0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
    0,  0,  0,  0,  0,  0,  0,
  ]

  const b = new Board(map)

  const expectedStyles = map.map(x => `tile-${x}`)
  const foundStyles = b.asComponent().props['tiles'].map(x => x.props['className'])

  expect(foundStyles).toEqual(expectedStyles)
})

test('is win', () => {
  const winMap = [
    0,  0,  0,  0,  0,  0,  0,
    0,  3,  3, 13, 14,  3,  0,
    0,  3, 13, 15, 11,  3,  0,
    1, 10, 15,  3, 12, 10,  2,
    0,  3,  3,  3,  3,  3,  0,
    0,  3,  3,  3,  3,  3,  0,
    0,  0,  0,  0,  0,  0,  0,
  ]

  const loseMap = [
    0,  0,  0,  0,  0,  0,  0,
    0,  3,  3, 13, 14,  3,  0,
    0,  3, 13, 15, 11,  3,  0,
    1, 10, 15,  3, 12,  3,  2,
    0,  3,  3,  3,  3,  3,  0,
    0,  3,  3,  3,  3,  3,  0,
    0,  0,  0,  0,  0,  0,  0,
  ]

  expect((new Board(winMap)).isWin()).toBeTruthy()
  expect((new Board(loseMap)).isWin()).toBeFalsy()
})
