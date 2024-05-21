import {computed, makeObservable, observable} from "mobx";
import TextField from "../libs/forms/fields/TextField";
import AppForm from "../libs/forms/AppForm";
import Wizard from "../libs/wizards/Wizard";
import {FormWizardStep} from "../libs/wizards/FormWizardStep";
import OptionField from "../libs/forms/fields/OptionField";
import FormField from "../libs/forms/fields/FormField";
import ApiResponseHandler from "@eryxcoop/appyx-comm/src/errors/ApiResponseHandler";

export default class NewMedicalConsultationWizardFeature {
  constructor(application, navigator) {
    this._application = application;
    this._navigator = navigator;
    this._form = this._createForm();
    this._wizard = this._createWizard();

    makeObservable(this, {
      _form: observable,
      _wizard: observable,
      form: computed,
      wizard: computed,
      isFormValid: computed,
    })
  }

  _handlerForMedicalConsultationCreation = () => {
    return new ApiResponseHandler({
      handlesSuccess: (response) => {
        const medicalConsultation = response.medicalConsultation();
        this._navigator(`/medical_consultations/${medicalConsultation.id}`, {state: {medicalConsultation}});
      }
    });
  }

  createFirstMedicalConsultation = () => {
    const responseHandler = this._handlerForMedicalConsultationCreation();
    const patient = this.form.values;
    this._application.apiClient().startFirstMedicalConsultation(patient, responseHandler);
  }

  _createMedicalConsultationFor = (patient) => {
    const responseHandler = this._handlerForMedicalConsultationCreation();
    this._application.apiClient().startMedicalConsultation(patient, responseHandler);
  }

  retrievePatientIfExists = () => {
/*    const responseHandler = new ApiResponseHandler({
      handlesError: (error) => {
        this._wizard.moveToNextStep();
      },
      handlesSuccess: (response) => {
        const patient = response.patient();
        this._createMedicalConsultationFor(patient);
      }
    });
    const identificationNumber = this.form.getFieldValue('identificationNumber');
    this._application.apiClient().retrievePatientIfExists(identificationNumber, responseHandler);*/
    this._wizard.moveToNextStep();
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

  biologicalSexOptionsSelect() {
    return [
      {label: 'Masculino', value: 'MALE'},
      {label: 'Femenino', value: 'FEMALE'},
      {label: 'Intersexual', value: 'INTERSEX'}
    ]
  }

  _createWizard() {
    const wizard = new Wizard();
    wizard.addSteps(
      [
        new FormWizardStep(
          {
            formField: this.form.getFieldByName('identificationNumber'),
            loading: () => false,
            onContinue: this.retrievePatientIfExists,
            extraProps: {}
          }
        ),
        new FormWizardStep(
          {
            formField: this.form.getFieldByName('identificationNumber'),
            loading: () => false,
            onContinue: this.createFirstMedicalConsultation,
            extraProps: {
              form: this.form,
              biologicalSexOptionsSelect: this.biologicalSexOptionsSelect()
            }
          }
        )
      ]
    );
    return wizard;
  }

  get wizard() {
    return this._wizard;
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