import {computed, makeObservable, observable} from "mobx";
import AppForm from "../libs/forms/AppForm";
import ApiResponseHandler from "@eryxcoop/appyx-comm/src/errors/ApiResponseHandler";
import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";
import TextField from "../libs/forms/fields/TextField";
import OptionField from "../libs/forms/fields/OptionField";
import FormField from "../libs/forms/fields/FormField";

export default class CreatePatientFeature {
    constructor(application, navigator) {
        this._application = application;
        this._navigator = navigator;
        this._form = this._createForm();

        makeObservable(this, {
            _form: observable,
            form: computed,
            isFormValid: computed,
        })
    }

    createPatient = () => {
        const responseHandler = ApiResponseHandler.for(SuccessfulApiResponse, () => {
            this._navigator('/patients');
        });
        const element = this.form.values;
        this._application.apiClient().createElement(element, responseHandler);
    }

    goBack = () => {
        this._navigator('/patients');
    }

    biologicalSexOptionsSelect() {
        return [
            {label: 'Masculino', value: 'MALE'},
            {label: 'Femenino', value: 'FEMALE'},
            {label: 'Intersexual', value: 'INTERSEX'}
        ]
    }

    _createForm() {
        const biologicalSexOptions = this.biologicalSexOptionsSelect().map((option) => {
            return option.value;
        });
        const fields = {
            "firstName": new TextField(2, 20),
            "lastName": new TextField(2, 20),
            "biologicalSex": new OptionField(biologicalSexOptions),
            "birthdate": new FormField(),
            "identificationNumber": new TextField(3, 15),
        }

        return new AppForm(fields);
    }

    get isFormValid() {
        return !this.form.isValid;
    }

    get form() {
        return this._form;
    }

    set form(newForm) {
        this._form = newForm;
    }

}