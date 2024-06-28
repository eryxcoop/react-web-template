import TextField from './TextField';
import EmailValidator from './validators/EmailValidator';

export default class EmailField extends TextField {
  constructor() {
    super(1, 100);
    this._validators.push(new EmailValidator());
  }
}
