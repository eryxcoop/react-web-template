export default class EmailValidator {
  isValid(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  errorMessage() {
    return 'Email invalido.';
  }
}
