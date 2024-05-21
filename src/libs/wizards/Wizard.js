import {action, computed, makeObservable, observable} from "mobx";

export default class Wizard {
  constructor() {
    this._steps = [];
    this._currentStep = 0;

    makeObservable(this, {
      _currentStep: observable,
      currentStep: computed,
      moveToNextStep: action,
      moveToStep: action,
      moveToPreviousStep: action,
      restart: action,
    });
  }

  addSteps(steps) {
    this._steps = steps;
    this._steps.map((step) => step.usesWizard(this));
  }

  get currentStep() {
    return this._currentStep;
  }

  moveToNextStep = () => {
    if (this._currentStep < this._steps.length - 1) {
      this._currentStep += 1;
    }
  };

  moveToPreviousStep = () => {
    if (this._currentStep > 0) {
      this._currentStep -= 1;
    }
  };

  moveToStep = (stepNumber) => {
    this._currentStep = stepNumber;
  };

  stepNumber(step) {
    return this._steps[step];
  }

  restart() {
    this._currentStep = 0;
  }
}