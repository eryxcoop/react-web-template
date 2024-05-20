import Typography from '@mui/material/Typography';
import FilledButton from '../components/buttons/FilledButton';
import {useTheme} from '@mui/material';
import {useApplication} from '../providers/ApplicationProvider';
import {observer} from 'mobx-react';
import useFeature from '../hooks/useFeature';
import CreatePatientFeature from "../features/CreatePatientFeature";
import {useNavigate} from "react-router-dom";
import LineButton from "../components/buttons/LineButton";
import FormTextField from "../components/fields/FormTextField";
import FormSelectField from "../components/fields/FormSelectField";
import FormDateField from "../components/fields/FormDateField";

function CreatePatientScreen() {
    const theme = useTheme();
    const application = useApplication();
    const navigator = useNavigate();
    const feature = useFeature(() => new CreatePatientFeature(application, navigator));
    const style = styles(theme);

    const newPatientForm = () => {
        return (
            <section style={style.formContainer}>
                <div style={style.rowContainer}>
                    <FormTextField label={'Nombre'} field={feature.form.getFieldByName("firstName")}/>
                    <FormTextField label={'Apellido'} field={feature.form.getFieldByName("lastName")}/>
                </div>
                <div style={style.rowContainer}>
                    <FormSelectField label={'Sexo'} field={feature.form.getFieldByName("biologicalSex")}
                                     options={feature.biologicalSexOptionsSelect()}/>
                    <FormDateField label={'Fecha de Nacimiento'} field={feature.form.getFieldByName("birthdate")}/>
                </div>
                <div style={style.rowContainer}>
                    <FormTextField label={'DNI'} width={'49%'}
                                   field={feature.form.getFieldByName("identificationNumber")}/>
                </div>
            </section>
        )
    }

    return feature && (
        <section style={style.mainContainer}>
            <div style={style.rowContainer}>
                <Typography color={theme.text.primary} variant="h5" fontWeight={'800'}>
                    Nuevo Paciente
                </Typography>
            </div>

            {newPatientForm()}

            <div style={style.buttonsContainer}>
                <FilledButton disabled={feature.isFormValid} onClick={feature.createPatient}>
                    Crear
                </FilledButton>
                <LineButton onClick={feature.goBack}>
                    Volver
                </LineButton>
            </div>
        </section>
    );

}

export default observer(CreatePatientScreen);

const styles = (theme) => ({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
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