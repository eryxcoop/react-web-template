import * as React from 'react';
import Typography from '@mui/material/Typography';
import FilledButton from '../components/buttons/FilledButton';
import {useTheme} from '@mui/material';
import {useApplication} from '../providers/ApplicationProvider';
import ExampleListFeature from '../features/ExampleListFeature';
import {observer} from 'mobx-react';
import useFeature from '../hooks/useFeature';
import {useNavigate} from 'react-router-dom';

// icons
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import {ScreenTitleBar} from '../components/ScreenTitleBar';
import ValidateActionButtonDialog from "../components/ValidateActionButtonDialog";


function GenericScreen() {
  const theme = useTheme();
  const application = useApplication();
  const navigator = useNavigate();
  const feature = useFeature(() => new ExampleListFeature(application, navigator));
  const style = styles(theme);

  return feature && (
    <Box sx={style.mainContainer}>
      <Box sx={style.headerContainer}>
        <ScreenTitleBar title={'Vista 1 ejemplo'} showBackButton={false}>
          <FilledButton onClick={feature.goToWizardView} style={style.newSessionButton}>
            <AddIcon color="white"/>
            <Typography>Wizard form ejemplo</Typography>
          </FilledButton>
        </ScreenTitleBar>
      </Box>
      <ValidateActionButtonDialog title={'Ejemplo de dialogo de confirmación'}
                                  label={'Ejemplo de dialogo de confirmación'}
                                  subText={'Mensaje explicando la acción a realizar'}
                                  acceptLabel={'Aceptar'}
                                  onConfirm={() => console.log("aceptado")}/>
      <FilledButton onClick={feature.exampleToastMessage}>
        Ejemplo de mensaje toast
      </FilledButton>
    </Box>
  );
}

export default observer(GenericScreen);

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  newSessionButton: {
    marginLeft: 'auto',
    gap: theme.spacing(1)
  }
});