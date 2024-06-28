import { AuthorizationManager } from '@eryxcoop/appyx-comm';

export default class BearerAuthorizationManager extends AuthorizationManager {
  constructor(app) {
    super();
    this._app = app;
  }

  configureHeaders(headers) {
    headers['Authorization'] = `Bearer ${this._app.session.token}`;
  }
}
