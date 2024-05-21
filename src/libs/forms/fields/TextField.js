import FormField from "./FormField";
import LengthValidator from "./validators/LengthValidator";

export default class TextField extends FormField {
  constructor(minLength, maxLength) {
    super();
    minLength = minLength !== undefined ? minLength : 1;
    this._validators = [new LengthValidator(minLength, maxLength)];
  }
}
