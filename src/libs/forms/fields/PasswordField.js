import FormField from './FormField';
import DigitValidator from './validators/DigitValidator';
import LengthValidator from './validators/LengthValidator';

export default class PasswordField extends FormField {
  constructor() {
    super();
    this._requiredLength = 6;
    this._validators = [new LengthValidator(this._requiredLength), new DigitValidator()];
  }

  requiredLength() {
    return this._requiredLength;
  }
}
