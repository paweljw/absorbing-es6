export class Console {
  constructor () {
    this.backlog = []
  }

  log (what) {
    this.backlog.push(what)
  }
}
