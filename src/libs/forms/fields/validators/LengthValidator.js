export default class LengthValidator {
  constructor(minLength, maxLength) {
    this._minLength = minLength;
    this._maxLength = maxLength || minLength;
  }

  isValid(value) {
    return value.length >= this._minLength && value.length <= this._maxLength;
  }

  errorMessage() {
    const requiredLength =
      this._minLength === this._maxLength ? this._minLength : "entre " + this._minLength + " y " + this._maxLength;
    return "Debe ser de " + requiredLength + " dígitos";
  }
}
