import FormField from './FormField';
import NumberField from './NumberField';
import TextField from './TextField';
import Money from '../../libs/moneyLib/Money';

export default class MoneyField extends FormField {
  constructor() {
    super();
    this._amountField = new NumberField(1, 10);
    this._currencyField = new TextField(1, 5);
    this._validators = [];
  }

  get value() {
    return new Money(this._amountField.value, this._currencyField.value);
  }

  updateValue(amount, currency) {
    this._amountField.updateValue(amount);
    this._currencyField.updateValue(currency);
  }

  get amount() {
    return this._amountField.value;
  }

  get currency() {
    return this._currencyField.value;
  }

  get isValid() {
    return this._amountField.isValid() && this._currencyField.isValid();
  }
}
