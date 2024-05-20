import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";

export default class GetAudioNoteResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        audio_note:
          {
            "creation_date": "2021-01-01",
            "public_url": "asdf.wav",
            "name": 'note1.wav',
            "has_transcription": false
          },
      }
    }
  }

  audioNote() {
    return this.content().audio_note;
  }
}