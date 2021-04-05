export default class Team {
  * [Symbol.iterator]() {
    yield* Object.values(this);
  }
}
