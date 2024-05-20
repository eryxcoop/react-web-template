import {action, computed, makeObservable, observable} from "mobx";
import ApiResponseHandler from '@eryxcoop/appyx-comm/src/errors/ApiResponseHandler';
import GetElementsResponse from '../app/communication/responses/GetElementsResponse';
import {toast} from "react-toastify";

export default class ExampleListFeature {
  constructor(application, navigator) {
    this._application = application;
    this._navigator = navigator;
    this._elements = [];

    makeObservable(this, {
      _elements: observable,
      elements: computed,
      _updateElements: action,
    })
  }

  load() {
    // Here you perform 'onComponentDidMount' logic
    // For example you request data from the server
    // this.getElements();
  }

  getElements = () => {
    const responseHandler = ApiResponseHandler.for(GetElementsResponse, (response) => {
      // Just for now, until we implement search
      const elements = response.patients()
      this._updateElements(elements);
    });

    this._application.apiClient().getDoctorsPatients(responseHandler);
  }

  goToWizardView = () => {
    this._navigator('new-consultation');
  }


  exampleToastMessage = () => {
    toast.success('Ejemplo de mensaje toast exitoso');
  }

  _updateElements(newPatients) {
    this._elements = newPatients;
  }

  get elements() {
    return this._elements;
  }

}