import {action, computed, makeObservable, observable} from "mobx";

export default class DashboardFeature {
  constructor(application, navigator, location) {
    this._application = application;
    this._navigator = navigator;
    this._location = location;

    this._optionSelected = '';
    this._open = true;

    makeObservable(this, {
      _optionSelected: observable,
      _open: observable,
      optionSelected: computed,
      open: computed,
      setOptionSelected: action,
      load: action,
      handleDrawerOpen: action,
      handleDrawerClose: action,
    });
  }

  load() {
    const path = this._location.pathname.split('/')[1];
    if (path === 'patients') {
      this.setOptionSelected('Vista 1');
    } else {
      this.setOptionSelected('Inicio');
    }

    this._open = window.innerWidth > 960;
  }

  get optionSelected() {
    return this._optionSelected;
  }

  get open() {
    return this._open;
  }

  setOptionSelected(option) {
    this._optionSelected = option;
  }

  handleDrawerOpen = () => {
    this._open = true;
  };

  handleDrawerClose = () => {
    this._open = false;
  };

  logOut = async () => {
    this._application.logOut();
    this._navigator('/');
  }

}