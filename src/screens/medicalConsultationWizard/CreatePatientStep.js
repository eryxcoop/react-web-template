import {useTheme} from "@mui/material";
import FormTextField from "../../components/fields/FormTextField";
import FormSelectField from "../../components/fields/FormSelectField";
import FormDateField from "../../components/fields/FormDateField";
import Typography from "@mui/material/Typography";
import LineButton from "../../components/buttons/LineButton";
import FilledButton from "../../components/buttons/FilledButton";
import {observer} from "mobx-react";

function CreatePatientStep({form, onBack, onContinue, biologicalSexOptionsSelect}) {
  const theme = useTheme();
  const style = styles(theme);

  const newPatientForm = () => {
    return (
      <section style={style.formContainer}>
        <div style={style.rowContainer}>
          <FormTextField label={'Nombre'} field={form.getFieldByName("firstName")}/>
          <FormTextField label={'Apellido'} field={form.getFieldByName("lastName")}/>
        </div>
        <div style={style.rowContainer}>
          <FormSelectField label={'Sexo'} field={form.getFieldByName("biologicalSex")}
                           options={biologicalSexOptionsSelect}/>
          <FormDateField label={'Fecha de Nacimiento'} field={form.getFieldByName("birthdate")}/>
        </div>
        <div style={style.rowContainer}>
          <FormTextField label={'DNI'} width={'49%'}
                         field={form.getFieldByName("identificationNumber")}/>
        </div>
      </section>
    )
  }

  return (
    <div style={style.mainContainer}>
      <div style={style.rowContainer}>
        <Typography color={theme.text.primary} variant="h5" fontWeight={'800'}>
          Completar datos del paciente
        </Typography>
      </div>

      {newPatientForm()}

      <div style={style.buttonsContainer}>
        <FilledButton disabled={!form.isValid} onClick={onContinue}>
          Continuar
        </FilledButton>
        <LineButton onClick={onBack}>
          Volver
        </LineButton>
      </div>
    </div>
  );

}

export default observer(CreatePatientStep);

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