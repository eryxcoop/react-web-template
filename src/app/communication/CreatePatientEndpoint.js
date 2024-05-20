import {Endpoint, SuccessfulApiResponse} from '@eryxcoop/appyx-comm';

export default class CreatePatientEndpoint extends Endpoint {
    constructor() {
        super({url: "patients/new", method: Endpoint.postMethod()});
    }
    ownResponses() {
        return [SuccessfulApiResponse]
    }

    adaptValues(values) {
        return {
            first_name: values.firstName,
            last_name: values.lastName,
            identification_number: values.identificationNumber,
            birthdate: this._presentDate(values.birthdate),
            biological_sex: values.biologicalSex
        }
    }

    _presentDate(aDate) {
        return aDate.toISOString().substring(0, 10);
    }

    needsAuthorization() {
        return true;
    }
}