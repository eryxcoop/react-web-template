import { Endpoint } from '@eryxcoop/appyx-comm';
import MedicalConsultationResponse from './responses/MedicalConsultationResponse';

export default class CreateMedicalConsultationEndpoint extends Endpoint {
  constructor() {
    super({ url: 'medical_consultation/new', method: Endpoint.postMethod() });
  }

  ownResponses() {
    return [MedicalConsultationResponse];
  }

  adaptValues(patient) {
    return {
      identification_number: patient.identification_number,
    };
  }

  needsAuthorization() {
    return true;
  }
}
