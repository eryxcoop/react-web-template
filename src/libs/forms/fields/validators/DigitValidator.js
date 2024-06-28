export default class DigitValidator {
  isValid(password) {
    return password.match(/^[0-9]+$/) != null;
  }

  errorMessage() {
    return 'Debe contener solo números';
  }
}
