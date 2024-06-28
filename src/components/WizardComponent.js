import { observer } from 'mobx-react';

function WizardComponent({ wizard, steps }) {
  const CurrentStepComponent = steps[wizard.currentStep];
  const componentProps = wizard.stepNumber(wizard.currentStep);
  return (
    <div>
      <CurrentStepComponent {...componentProps.asProps()} />
    </div>
  );
}

export default observer(WizardComponent);
