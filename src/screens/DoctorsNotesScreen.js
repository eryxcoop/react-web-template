import * as React from 'react';
import {useTheme} from '@mui/material';
import {useApplication} from '../providers/ApplicationProvider';
import {observer} from 'mobx-react';

// icons
import Box from '@mui/material/Box';
import {ScreenTitleBar} from "../components/ScreenTitleBar";
import useFeature from "../hooks/useFeature";
import DoctorsNotesFeature from "../features/DoctorsNotesFeature";


function DoctorsNotesScreen() {
  const theme = useTheme();
  const application = useApplication();
  const feature = useFeature(() => new DoctorsNotesFeature(application), []);
  const style = styles(theme);

  return feature && (
    <Box sx={style.mainContainer}>
      <ScreenTitleBar title={`Mis notas`}/>
      {/* <AudioNoteList
        audioNotes={feature.audioNotes}
        audioNotesOwner={new Doctor()}
        onDelete={feature.deleteAudioNoteAndRefresh}
      /> */}
    </Box>
  );
}

export default observer(DoctorsNotesScreen);

const styles = (theme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
});