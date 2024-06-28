import { Endpoint } from '@eryxcoop/appyx-comm';
import MedicalConsultationResponse from './responses/MedicalConsultationResponse';

export default class CreateFirstMedicalConsultationEndpoint extends Endpoint {
  constructor() {
    super({ url: 'medical_consultation/for_new_patient', method: Endpoint.postMethod() });
  }

  ownResponses() {
    return [MedicalConsultationResponse];
  }

  adaptValues(values) {
    return {
      first_name: values.firstName,
      last_name: values.lastName,
      identification_number: values.identificationNumber,
      birthdate: this._presentDate(values.birthdate),
      biological_sex: values.biologicalSex,
    };
  }

  _presentDate(aDate) {
    return aDate.toISOString().substring(0, 10);
  }

  needsAuthorization() {
    return true;
  }
}
