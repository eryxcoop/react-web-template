import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";

export default class GetAudioNoteTranscriptionResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        transcription: "hello",
      }
    }
  }

  transcription() {
    return this.content().transcription;
  }
}