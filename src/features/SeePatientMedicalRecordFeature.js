import ApiResponseHandler from "@eryxcoop/appyx-comm/src/errors/ApiResponseHandler";
import {action, computed, makeObservable, observable} from "mobx";
import {toast} from "react-toastify";

export default class SeePatientMedicalRecordFeature {
  constructor(identificationNumber, application, navigator, voiceAudioRecorder) {
    this._application = application;
    this._navigator = navigator;
    this._voiceAudioRecorder = voiceAudioRecorder;
    this._patient = undefined;
    this._notes = [];
    this._identificationNumber = identificationNumber;

    makeObservable(this, {
      _patient: observable,
      _notes: observable,
      refreshPatientAudioNotes: action,
      patient: computed,
      notes: computed,
      getPatientMedicalRecord: action,
    });
  }

  load() {
    this.getPatientMedicalRecord();
    this._voiceAudioRecorder.addAudioRecorderListener(this.refreshPatientAudioNotes);
  }

  onUnload = () => {
    this._voiceAudioRecorder.removeAudioRecorderListener(this.refreshPatientAudioNotes);
  }

  getPatientMedicalRecord() {
    const responseHandler = new ApiResponseHandler({
      handlesSuccess: (response) => {
        this._patient = response.patient();
        this._notes = response.audioNotes();
      }
    });
    this._application.apiClient().getPatientMedicalRecord(this._identificationNumber, responseHandler);
  }

  refreshPatientAudioNotes = () => {
    const responseHandler = new ApiResponseHandler({
      handlesSuccess: (response) => {
        this._notes = response.audioNotes();
      }
    });
    this._application.apiClient().getPatientAudioNotes(this._identificationNumber, responseHandler);
  }

  deleteAudioNoteAndRefresh = (audioNote) => {
    const responseHandler = new ApiResponseHandler({
      handlesSuccess: () => {
        this.refreshPatientAudioNotes();
        toast.success("Nota de audio eliminada correctamente")
      }
    });
    this._application.apiClient().deleteAudioNote(audioNote, responseHandler);
  }

  goBack = () => {
    this._navigator('/patients');
  }

  get patient() {
    return this._patient;
  }

  get notes() {
    return this._notes;
  }

}