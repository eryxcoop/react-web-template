export default class Patient {
  constructor(patient) {
    this._identification_number = patient.identification_number;
    this._first_name = patient.first_name;
    this._last_name = patient.last_name;
  }

  isPatient() {
    return true;
  }

  isDoctor() {
    return false;
  }

  id() {
    return this._identification_number;
  }

  seeNotePath() {
    return `/patients/audio-note`;
  }

  displayInAudioPlayer() {
    return `${this._first_name} ${this._last_name}`;
  }

  path() {
    return `/patients/${this._identification_number}`;
  }

}