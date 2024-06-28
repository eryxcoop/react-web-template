import { Endpoint } from '@eryxcoop/appyx-comm';
import LogInResponse from './responses/LogInResponse';

export default class LoginEndpoint extends Endpoint {
  constructor() {
    super({ url: 'access', method: Endpoint.postMethod() });
  }

  adaptValues({ googleToken }) {
    return {
      token: googleToken,
    };
  }

  ownResponses() {
    return [LogInResponse];
  }

  needsAuthorization() {
    return false;
  }
}
