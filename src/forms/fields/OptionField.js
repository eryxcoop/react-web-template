import FormField from "./FormField";
import OptionsValidator from "./validators/OptionsValidator";

export default class OptionField extends FormField {
    constructor(options) {
        super();
        this._validators = [new OptionsValidator(options)];
    }
}
