export default class MinValueValidator {
  constructor(minValue) {
    this._minValue = minValue;
  }

  isValid(value) {
    return value >= this._minValue;
  }

  errorMessage() {
    return "Debe ser de mayor a" + this._minValue;
  }
}
