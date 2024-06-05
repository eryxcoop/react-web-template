import {ApiClient} from "@eryxcoop/appyx-comm";
import EndpointFactory from "./EndpointFactory";

export default class MyAppApiClient {

  constructor(requester) {
    this._apiClient = new ApiClient(requester);
    this._endpointFactory = new EndpointFactory();
  }

  async login(googleToken, responseHandler) {
    const endpoint = this._endpointFactory.loginEndpoint();
    return this._apiClient.callEndpoint(endpoint, {googleToken}, responseHandler);
  }

  getElements(responseHandler) {
    const endpoint = this._endpointFactory.getElementsEndpoint();
    return this._apiClient.callEndpoint(endpoint, {}, responseHandler);
  }

  createElement = (patient, responseHandler) => {
    const endpoint = this._endpointFactory.createElementEndpoint();
    return this._apiClient.callEndpoint(endpoint, patient, responseHandler);
  }

  startFirstMedicalConsultation(patient, responseHandler) {
    const endpoint = this._endpointFactory.createFirstMedicalConsultationEndpoint();
    return this._apiClient.callEndpoint(endpoint, patient, responseHandler);
  }
}