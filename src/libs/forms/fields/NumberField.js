import FormField from "./FormField";
import MinValueValidator from "./validators/MinValueValidator";

export default class NumberField extends FormField {
  constructor(min) {
    super();
    this._validators = [new MinValueValidator(min)];
  }

  defaultValue() {
    return 0;
  }
}
