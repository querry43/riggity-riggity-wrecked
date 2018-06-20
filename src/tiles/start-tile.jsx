import BaseTile from './base-tile'

export default class StartTile extends BaseTile {
  isWin(caller) { return this.right.isWin(this) }
}
