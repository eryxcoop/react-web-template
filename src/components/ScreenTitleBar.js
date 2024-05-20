import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import MaiaIconButton from './buttons/MaiaIconButton';
import { ArrowBackIosNew } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export function ScreenTitleBar ({ title, children, showBackButton = true }) {
  const navigate = useNavigate();
  const theme = useTheme();
  const style = styles(theme);

  return <Box sx={style.titleBarContainer}>
    <Box sx={style.title}>
      { showBackButton && <MaiaIconButton onClick={() => navigate(-1)} icon={ArrowBackIosNew} title={'Atrás'} iconColor="white"/>}
      <Typography color={theme.text.primary} variant="h5" fontWeight={'800'}>
        {title}
      </Typography>
    </Box>
    {children}
  </Box>;
}

const styles = (theme) => ({
  titleBarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2)
  }
});