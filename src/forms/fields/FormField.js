import {action, computed, makeObservable, observable} from "mobx";

export default class FormField {
    constructor(isOptional = false) {
        this._value = this.defaultValue();
        this._errors = [];
        this._validators = [];
        this._isOptional = isOptional;

        makeObservable(this, {
            _value: observable,
            _errors: observable,
            hasErrors: computed,
            isValid: computed,
            value: computed,
            errors: computed,
            updateValue: action,
            clear: action,
            setErrors: action,
        });
    }

    get value() {
        return this._value;
    }

    get errors() {
        return this._errors;
    }

    defaultValue() {
        return "";
    }

    setErrors(errors) {
        this._errors = errors;
    }

    updateValue(value) {
        this._value = value;
    }

    clear() {
        this._value = this.defaultValue();
        this._errors = [];
    }

    get isValid() {
        if (this._isOptional && this._value === this.defaultValue()) {
            return true;
        }
        return this._validators.every((validator) => validator.isValid(this._value));
    }

    get hasErrors() {
        return this._errors.length > 0;
    }

    asOptional() {
        this._isOptional = true;
        return this;
    }
}
