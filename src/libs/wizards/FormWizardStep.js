export class FormWizardStep {
  constructor({formField, onBack, onContinue , loading = () => false, extraProps}) {
    this._wizard = null;

    this._onBack = onBack;
    this._onContinue = onContinue;
    this._formField = formField;
    this._loading = loading;
    this._extraProps = extraProps;
  }

  onBack() {
    return this._onBack || this._wizard.moveToPreviousStep;
  }

  onContinue() {
    return this._onContinue || this._wizard.moveToNextStep;
  }

  loading() {
    return this._loading();
  }

  formField() {
    return this._formField;
  }

  extraProps() {
    return this._extraProps;
  }

  usesWizard(wizard) {
    this._wizard = wizard;
  }

  asProps() {
    return {
      onBack: this.onBack(),
      onContinue: this.onContinue(),
      loading: this.loading(),
      formField: this.formField(),
      ...this.extraProps(),
    };
  }
}
