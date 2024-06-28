import { SuccessfulApiResponse } from '@eryxcoop/appyx-comm';

export default class GetElementsResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        elements: [
          {
            first_name: 'John',
            last_name: 'Doe',
            identification_number: '123458678',
            birthdate: '1990-01-01',
            biological_sex: 'MALE',
          },
        ],
      },
    };
  }

  elements() {
    return this.content().elements;
  }
}
