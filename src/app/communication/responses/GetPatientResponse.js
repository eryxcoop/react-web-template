import {SuccessfulApiResponse} from "@eryxcoop/appyx-comm";

export default class GetPatientResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        patient: {
          "first_name": "John",
          "last_name": "Doe",
          "identification_number": "123458678",
          "birthdate": "1990-01-01",
          "biological_sex": "MALE"
        }
      },
    }
  }

  patient() {
    return this.content().patient;
  }
}