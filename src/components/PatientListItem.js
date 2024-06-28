import ListItem from '@mui/material/ListItem';
import MaiaIconButton from './buttons/MaiaIconButton';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { ListItemAvatar } from '@mui/material';
import MaiaAvatar from './MaiaAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Typography from '@mui/material/Typography';

export function PatientListItem({
  patient,
  canRecord,
  isRecording,
  startRecording,
  stopRecording,
}) {
  const fullName = `${patient.first_name} ${patient.last_name}`;
  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        isRecording ? (
          <MaiaIconButton
            icon={StopCircleIcon}
            title={'Detener grabación'}
            onClick={stopRecording}
          />
        ) : (
          <MaiaIconButton
            onClick={startRecording}
            disabled={!canRecord}
            title={'Iniciar grabación'}
            icon={KeyboardVoiceIcon}
          />
        )
      }
    >
      <ListItemAvatar>
        <MaiaAvatar fullName={fullName} />
      </ListItemAvatar>
      <ListItemText
        primary={<Link to={`/patients/${patient.identification_number}`}>{fullName}</Link>}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              DNI {patient.identification_number}
            </Typography>
            {` — Fecha de nacimiento: ${patient.birthdate}`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
