import { SuccessfulApiResponse } from '@eryxcoop/appyx-comm';

export default class MedicalConsultationResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        medical_consultation: {
          id: 1,
          patient: {
            first_name: 'John',
            last_name: 'Doe',
            identification_number: '123458678',
            birthdate: '1990-01-01',
            biological_sex: 'MALE',
          },
        },
      },
    };
  }

  medicalConsultation() {
    return this.content().medical_consultation;
  }
}
