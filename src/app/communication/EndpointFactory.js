import {Endpoint, SuccessfulApiResponse} from "@eryxcoop/appyx-comm";
import GetElementsResponse from "./responses/GetElementsResponse";
import GetPatientResponse from "./responses/GetPatientResponse";
import GetAudioNotesResponse from "./responses/GetAudioNotesResponse";
import GetPatientMedicalRecordResponse from "./responses/GetPatientMedicalRecordResponse";
import GetAudioNoteResponse from "./responses/GetAudioNoteResponse";
import CreateMedicalConsultationEndpoint from "./CreateMedicalConsultationEndpoint";
import CreateFirstMedicalConsultationEndpoint from "./CreateFirstMedicalConsultationEndpoint";
import CreatePatientEndpoint from "./CreatePatientEndpoint";
import LoginEndpoint from "./LoginEndpoint";

export default class EndpointFactory {
  getDoctorsPatientsEndpoint() {
    return Endpoint.newGet({
      url: "patients",
      ownResponses: [GetElementsResponse],
    });
  }

  getPatientEndpoint() {
    return Endpoint.newGet({
      url: "patient",
      ownResponses: [GetPatientResponse],
    });
  }

  getPatientAudioNotesEndpoint() {
    return Endpoint.newGet({
      url: "notes",
      ownResponses: [GetAudioNotesResponse],
    });
  }

  getAudioNoteTranscriptionEndpoint(id) {
    return Endpoint.newGet({
      url: `notes/${id}/transcription`,
      ownResponses: [SuccessfulApiResponse],
    })
  }

  getAudioNoteEndpoint(id) {
    return Endpoint.newGet({
      url: `notes/${id}`,
      ownResponses: [GetAudioNoteResponse],
    })
  }

  getPatientMedicalRecordEndpoint() {
    return Endpoint.newGet({
      url: "patient/medical_record",
      ownResponses: [GetPatientMedicalRecordResponse],
    });
  }

  createMedicalConsultationEndpoint() {
    return new CreateMedicalConsultationEndpoint();
  }

  createFirstMedicalConsultationEndpoint() {
    return new CreateFirstMedicalConsultationEndpoint();
  }

  createPatientEndpoint() {
    return new CreatePatientEndpoint();
  }

  loginEndpoint() {
    return new LoginEndpoint();
  }

}