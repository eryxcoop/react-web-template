export class MedicalConsultationFeature {
  constructor ({ medicalConsultation }) {
    this._medicalConsultation = medicalConsultation;
  }

  load () {
    if (!this._medicalConsultation) {
      console.log('MedicalConsultationFeature: get medical consultation with ID');
    }
  }

  get medicalConsultation () {
    return this._medicalConsultation;
  }
}