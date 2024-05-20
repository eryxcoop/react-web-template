import {Endpoint, SuccessfulApiResponse} from '@eryxcoop/appyx-comm';

export default class CreatePatientAudioNoteEndpoint extends Endpoint {

  constructor() {
    super({url: "notes/new_audio_note", method: Endpoint.postMethod()});
  }

  ownResponses() {
    return [SuccessfulApiResponse]
  }

  contentType() {
    return 'multipart/form-data';
  }
}