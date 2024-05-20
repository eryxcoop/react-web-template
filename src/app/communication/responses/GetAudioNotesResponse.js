import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";
import AudioNotesAdapter from "../adapters/AudioNotesAdapter";

export default class GetAudioNotesResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        audio_notes: [
          {
            "creation_date": "2021-01-01",
            "public_url": "asdf.wav",
            "has_transcription": false
          },
          {
            "creation_date": "2021-01-02",
            "public_url": "hello.wav",
            "has_transcription": true
          }
        ]
      },
    }
  }

  audioNotes() {
    return new AudioNotesAdapter(this.content().audio_notes).adapt();
  }
}