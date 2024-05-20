import {Endpoint, SuccessfulApiResponse} from '@eryxcoop/appyx-comm';

export default class CreateDoctorAudioNoteEndpoint extends Endpoint {

  constructor() {
    super({url: "doctor/audio_notes", method: Endpoint.postMethod()});
  }

  ownResponses() {
    return [SuccessfulApiResponse]
  }

  contentType() {
    return 'multipart/form-data';
  }

  needsAuthorization() {
    return true;
  }
}