import { action, computed, makeObservable, observable } from "mobx";

export default class AppForm {
    constructor(fields = {}) {
        // How would this work for fields that depend on others?
        // How would this work for fields that aren't required? We could have OptionalField wrapper
        this._form = fields;
        this._errors = [];

        makeObservable(this, {
            _form: observable,
            _errors: observable,
            hasErrors: computed,
            isValid: computed,
            clear: action,
        });
    }

    get hasErrors() {
        return Object.keys(this._form).some((key) => this._form[key].hasErrors) || this._errors.length > 0;
    }

    get isValid() {
        return Object.keys(this._form).every((key) => this._form[key].isValid);
    }

    getFieldByName(field) {
        return this._form[field];
    }

    getFieldValue(fieldName) {
        return this.getFieldByName(fieldName).value;
    }

    addErrors(errors) {
        this._errors.push(...errors);
    }

    clear() {
        this._errors = [];
        Object.keys(this._form).forEach((key) => this._form[key].clear());
    }

    get values() {
        return Object.keys(this._form).reduce((values, key) => {
            values[key] = this._form[key].value;
            return values;
        }, {});
    }
}