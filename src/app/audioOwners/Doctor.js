export default class Doctor {

  isPatient() {
    return false;
  }

  isDoctor() {
    return true;
  }

  id() {
    return '';
  }

  displayInAudioPlayer() {
    return 'Mi nota'
  }

  seeNotePath() {
    return `/doctor_notes/note`;
  }

  path() {
    return `/patients/`;
  }

}