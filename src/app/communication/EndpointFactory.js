import { Endpoint } from '@eryxcoop/appyx-comm';
import GetElementsResponse from './responses/GetElementsResponse';
import CreateFirstMedicalConsultationEndpoint from './CreateFirstMedicalConsultationEndpoint';
import CreatePatientEndpoint from './CreatePatientEndpoint';
import LogInResponse from './responses/LogInResponse';

export default class EndpointFactory {
  getElementsEndpoint() {
    return Endpoint.newGet({
      url: 'patients',
      ownResponses: [GetElementsResponse],
    });
  }

  createFirstMedicalConsultationEndpoint() {
    return new CreateFirstMedicalConsultationEndpoint();
  }

  createElementEndpoint() {
    return new CreatePatientEndpoint();
  }

  loginEndpoint() {
    return Endpoint.newPost({
      url: 'login',
      ownResponses: [LogInResponse],
    });
  }
}
