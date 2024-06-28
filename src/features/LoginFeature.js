import { action, computed, makeObservable, observable } from 'mobx';

export default class LoginFeature {
  constructor(application) {
    this._application = application;
    this._errorInLogIn = false;

    makeObservable(this, {
      _errorInLogIn: observable,
      errorInLogIn: computed,
      login: action,
    });
  }

  get errorInLogIn() {
    return this._errorInLogIn;
  }

  login = () => {
    const onError = () => {
      this._errorInLogIn = true;
    };
    this._application.logIn(onError);
  };
}
