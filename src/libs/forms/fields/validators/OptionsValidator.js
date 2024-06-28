export default class OptionsValidator {
  constructor(options) {
    this._options = options;
  }

  isValid(value) {
    return this._options.some((option) => option === value);
  }

  errorMessage() {
    return 'Opción inválida';
  }
}
