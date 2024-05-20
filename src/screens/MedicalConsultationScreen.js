import {useTheme} from '@mui/material';
import Typography from '@mui/material/Typography';
import {observer} from 'mobx-react';

// Icons
import {useLocation, useParams} from 'react-router-dom';
import useFeature from '../hooks/useFeature';
import {MedicalConsultationFeature} from '../features/MedicalConsultationFeature';
import PatientInfoBox from "../components/PatientInfoBox";


function MedicalConsultationScreen() {
  const theme = useTheme();
  const {id} = useParams();
  const location = useLocation();
  const medicalConsultation = location.state.medicalConsultation;

  const feature = useFeature(() => new MedicalConsultationFeature({id, medicalConsultation}), [id, location]);

  const style = styles(theme);

  return feature && (
    <div style={style.mainContainer}>
      <div style={style.rowContainer}>
        <Typography color={theme.text.primary} variant="h5" fontWeight={'800'}>
          Consulta
        </Typography>
      </div>
      <PatientInfoBox patient={feature.medicalConsultation.patient}/>
    </div>
  );
}


export default observer(MedicalConsultationScreen);

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  }
});