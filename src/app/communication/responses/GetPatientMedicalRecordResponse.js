import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";
import AudioNotesAdapter from "../adapters/AudioNotesAdapter";

export default class GetPatientMedicalRecordResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        medical_record: {
          patient: {
            "first_name": "John",
            "last_name": "Doe",
            "identification_number": "123458678",
            "birthdate": "1990-01-01",
            "biological_sex": "MALE"
          },
          notes: [
            {
              "creation_date": "2021-01-01",
              "public_url": "asdf.wav",
              "name": 'note1.wav',
              "has_transcription": false
            },
            {
              "creation_date": "2021-01-02",
              "public_url": "hello.wav",
              "name": 'note2.wav',
              "has_transcription": true
            }
          ]
        }
      },
    }
  }

  patient() {
    return this.content().medical_record.patient;
  }

  audioNotes() {
    return new AudioNotesAdapter(this.content().medical_record.notes).adapt();
  }
}