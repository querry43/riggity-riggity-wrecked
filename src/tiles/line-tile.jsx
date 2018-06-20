import BaseTile from './base-tile'

export default class LineTile extends BaseTile {
  isWin(caller) {
    let edges;

    switch (this.type) {
      default:
      case 10:
        edges = [this.left, this.right]
        break
      case 11:
        edges = [this.up, this.down]
        break
      case 12:
        edges = [this.up, this.right]
        break
      case 13:
        edges = [this.down, this.right]
        break
      case 14:
        edges = [this.left, this.down]
        break
      case 15:
        edges = [this.left, this.up]
        break
    }

    if (caller === edges[0]) {
      return edges[1].isWin(this)
    } else if (caller === edges[1]) {
      return edges[0].isWin(this)
    } else {
      return false
    }
  }
}
