import {action, computed, makeObservable, observable} from "mobx";
import {toast} from "react-toastify";
import ApiResponseHandler from "@eryxcoop/appyx-comm/src/errors/ApiResponseHandler";
import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";

export default class VoiceAudioRecorder {
  constructor(application, browserAudioRecorder) {
    // Recorder
    this._browserAudioRecorder = browserAudioRecorder;
    this._application = application;
    this._personBeingRecord = null;
    this._audioRecorderListeners = [];

    // Audio player
    this._audioPlayer = null;

    makeObservable(this, {
      _browserAudioRecorder: observable,
      _personBeingRecord: observable,
      personBeingRecord: computed,
      setBrowserAudioRecorder: action,
      isRecording: computed,
      shouldBeDisplayed: computed,
      recordingTime: computed,
      isPaused: computed,
      mediaRecorder: computed,
      saveRecording: action,
      cancelRecording: action,
      startRecording: action,
      startRecordingDoctor: action,
      togglePauseResume: action,
      stopRecording: action,
      deleteRecording: action,
    });
  }

  useAudioPlayer(audioPlayer) {
    this._audioPlayer = audioPlayer;
  }

  async startRecording(person) {
    if (this._audioPlayer.isAudioPlaying) {
      toast.info("Estás escuchando una nota. Detén la misma para grabar una nota.", {position: "top-right"})
      return;
    }
    this._personBeingRecord = person;
    this._browserAudioRecorder.startRecording();
  }

  async startRecordingDoctor() {
    if (this._audioPlayer.isAudioPlaying) {
      toast.info("Estás escuchando una nota. Detén la misma para grabar una nota.", {position: "top-right"})
      return;
    }
    this._personBeingRecord = null;
    this._browserAudioRecorder.startRecording();
  }

  stopRecording = () => {
    this._browserAudioRecorder.stopRecording();
  }

  deleteRecording = () => {
    this._browserAudioRecorder.deleteRecording();
  }

  async saveRecording(recordingBlob) {
    const responseHandler = ApiResponseHandler.for(SuccessfulApiResponse, () => {
      toast.success("Nota de audio guardada.");
      this._audioRecorderListeners.forEach((listener) => listener());
    });

    if (!this._browserAudioRecorder.recordingCanceled) {
      if (this._personBeingRecord.isPatient()) {
        this._application.apiClient().savePatientRecording(this._personBeingRecord, recordingBlob, responseHandler);
      } else {
        this._application.apiClient().saveDoctorRecording(recordingBlob, responseHandler);
      }
      this._browserAudioRecorder.reset()
    }
    this._personBeingRecord = null;
  }

  cancelRecording() {
    this._personBeingRecord = null;
  }

  get personBeingRecord() {
    return this._personBeingRecord;
  }

  get isPaused() {
    return this._browserAudioRecorder.isPaused;
  }

  get recordingTime() {
    return this._browserAudioRecorder.recordingTime;
  }

  get mediaRecorder() {
    return this._browserAudioRecorder.mediaRecorder;
  }

  get isRecording() {
    return this._browserAudioRecorder.isRecording;
  }

  get shouldBeDisplayed() {
    return this.isRecording;
  }

  addAudioRecorderListener(listener) {
    this._audioRecorderListeners.push(listener);
  }

  removeAudioRecorderListener(listener) {
    this._audioRecorderListeners = this._audioRecorderListeners.filter((l) => l !== listener);
  }

  togglePauseResume = () => {
    this._browserAudioRecorder.togglePauseResume();
  }

  setBrowserAudioRecorder(browserAudioRecorder) {
    this._browserAudioRecorder = browserAudioRecorder;
  }
}