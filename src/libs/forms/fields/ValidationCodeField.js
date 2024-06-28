import { computed, makeObservable, observable } from 'mobx';

import FormField from './FormField';
import TextField from './TextField';

export default class ValidationCodeField extends FormField {
  constructor(length) {
    super();
    this._parts = Array.from(Array(length)).map(() => new TextField(1));

    makeObservable(this, {
      _parts: observable,
      parts: computed,
    });
  }

  get parts() {
    return this._parts;
  }

  getPart(index) {
    return this.parts[index];
  }

  clear() {
    super.clear();
    this.parts.forEach((part) => part.clear());
  }

  get value() {
    return this.parts.map((part) => part.value).join('');
  }

  get isValid() {
    return this.parts.every((part) => part.isValid);
  }
}
