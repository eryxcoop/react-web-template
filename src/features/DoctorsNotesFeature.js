import {makeAutoObservable} from "mobx";
import ApiResponseHandler from "@eryxcoop/appyx-comm/src/errors/ApiResponseHandler";
import {toast} from "react-toastify";

export default class DoctorsNotesFeature {
  constructor(application, voiceAudioRecorder) {
    this._application = application;
    this._voiceAudioRecorder = voiceAudioRecorder;
    this._audioNotes = [];

    makeAutoObservable(this);
  }

  load() {
    this._retrieveAudioNotes();
    this._voiceAudioRecorder.addAudioRecorderListener(this._retrieveAudioNotes);
  }

  onUnload = () => {
    this._voiceAudioRecorder.removeAudioRecorderListener(this._retrieveAudioNotes);
  }

  _retrieveAudioNotes = () => {
    const responseHandler = new ApiResponseHandler({
      handlesSuccess: (response) => {
        this.audioNotes = response.audioNotes()
      }
    });
    this._application.apiClient().getDoctorAudioNotes(responseHandler);
  }

  deleteAudioNoteAndRefresh = (audioNote) => {
    const responseHandler = new ApiResponseHandler({
      handlesSuccess: () => {
        this._retrieveAudioNotes();
        toast.success("Nota de audio eliminada correctamente")
      }
    });
    this._application.apiClient().deleteAudioNote(audioNote, responseHandler);
  }

  get audioNotes() {
    return this._audioNotes;
  }

  set audioNotes(audioNotes) {
    this._audioNotes = audioNotes;
  }

}