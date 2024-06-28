import PersonIcon from '@mui/icons-material/Person';
import TransgenderIcon from '@mui/icons-material/Transgender';
import BadgeIcon from '@mui/icons-material/Badge';
import { Grid, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';

function PatientInfoBox({ patient }) {
  const theme = useTheme();
  const style = styles(theme);

  const fullName = `${patient?.first_name || ''} ${patient?.last_name || ''}`;
  const identificationNumber = `DNI ${patient.identification_number}`;

  const renderPatientInfoRow = (icon, label, text) => {
    return (
      <div style={style.personalInfoRow}>
        <div style={style.iconContainer}>{icon}</div>
        <Typography variant="body1" color={theme.text.primary}>
          {text !== undefined ? text : '-'}
        </Typography>
      </div>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {renderPatientInfoRow(<PersonIcon style={style.iconColor} />, 'Nombre', fullName)}
      </Grid>
      <Grid item xs={6}>
        {renderPatientInfoRow(<BadgeIcon style={style.iconColor} />, 'DNI', identificationNumber)}
      </Grid>
      <Grid item xs={6}>
        {renderPatientInfoRow(
          <TransgenderIcon style={style.iconColor} />,
          'Sexo',
          patient?.biological_sex,
        )}
      </Grid>
    </Grid>
  );
}

export default observer(PatientInfoBox);

const styles = (theme) => ({
  personalInfoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '1rem',
  },
  iconContainer: {
    background: theme.colors.lightBlue,
    padding: '0.5rem',
    display: 'flex',
    borderRadius: '50%',
  },
  iconColor: {
    color: theme.colors.white,
    height: '0.8em',
    width: '0.8em',
  },
});
