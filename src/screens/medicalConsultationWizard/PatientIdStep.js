import { useTheme } from '@mui/material';
import FilledButton from '../../components/buttons/FilledButton';
import { observer } from 'mobx-react';
import FormTextField from '../../components/fields/FormTextField';
import { ScreenTitleBar } from '../../components/ScreenTitleBar';

function PatientIdStep({formField, onContinue}) {
  const theme = useTheme();
  const style = styles(theme);
  return (
    <div style={style.mainContainer}>
      <ScreenTitleBar title={'Ingresa DNI'} />

      <FormTextField field={formField} label={"DNI"} width={'50%'}/>

      <div style={style.buttonsContainer}>
        <FilledButton disabled={!formField.isValid} onClick={onContinue}>
          Continuar
        </FilledButton>
      </div>
    </div>
  );
}


export default observer(PatientIdStep);

const styles = () => ({
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
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '10px',
    width: '70%',
  }
});