import { SuccessfulApiResponse } from '@eryxcoop/appyx-comm';

export default class LogInResponse extends SuccessfulApiResponse {
  static defaultResponse() {
    return {
      object: {
        profile: {
          full_name: 'Delfi Brea',
        },
      },
    };
  }

  fullName() {
    return this.content().profile.full_name;
  }
}
