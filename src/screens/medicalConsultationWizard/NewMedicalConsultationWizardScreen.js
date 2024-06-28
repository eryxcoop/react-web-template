import { useApplication } from '../../providers/ApplicationProvider';
import { observer } from 'mobx-react';
import useFeature from '../../hooks/useFeature';
import NewMedicalConsultationWizardFeature from '../../features/NewMedicalConsultationWizardFeature';
import PatientIdStep from './PatientIdStep';
import CreatePatientStep from './CreatePatientStep';
import WizardComponent from '../../components/WizardComponent';
import { useNavigate } from 'react-router-dom';

function NewMedicalConsultationWizardScreen() {
  const application = useApplication();
  const navigator = useNavigate();
  const feature = useFeature(() => new NewMedicalConsultationWizardFeature(application, navigator));
  const style = styles();

  return (
    feature && (
      <section style={style.mainContainer}>
        <WizardComponent steps={[PatientIdStep, CreatePatientStep]} wizard={feature.wizard} />
      </section>
    )
  );
}

export default observer(NewMedicalConsultationWizardScreen);

const styles = () => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
});
