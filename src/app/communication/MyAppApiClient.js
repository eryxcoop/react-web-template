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

  getDoctorsPatients(responseHandler) {
    const endpoint = this._endpointFactory.getDoctorsPatientsEndpoint();
    return this._apiClient.callEndpoint(endpoint, {}, responseHandler);
  }

  createPatient = (patient, responseHandler) => {
    const endpoint = this._endpointFactory.createPatientEndpoint();
    return this._apiClient.callEndpoint(endpoint, patient, responseHandler);
  }

  startFirstMedicalConsultation(patient, responseHandler) {
    const endpoint = this._endpointFactory.createFirstMedicalConsultationEndpoint();
    return this._apiClient.callEndpoint(endpoint, patient, responseHandler);
  }

  startMedicalConsultation(patient, responseHandler) {
    const endpoint = this._endpointFactory.createMedicalConsultationEndpoint();
    return this._apiClient.callEndpoint(endpoint, patient, responseHandler);
  }

  getPatientAudioNotes(identificationNumber, responseHandler) {
    const values = {identification_number: identificationNumber}
    const endpoint = this._endpointFactory.getPatientAudioNotesEndpoint();
    return this._apiClient.callEndpoint(endpoint, values, responseHandler);
  }

  getPatientMedicalRecord(identificationNumber, responseHandler) {
    const values = {identification_number: identificationNumber}
    const endpoint = this._endpointFactory.getPatientMedicalRecordEndpoint();
    return this._apiClient.callEndpoint(endpoint, values, responseHandler);
  }
}