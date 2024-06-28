import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useApplication } from '../providers/ApplicationProvider';
import DashboardFeature from '../features/DashboardFeature';
import MaiaDrawer from '../components/BasicDrawer';
import useFeature from '../hooks/useFeature';
import { observer } from 'mobx-react';
import useIsOnMobile from '../hooks/useIsOnMobile';

const getAppBarWidth = (theme) => {
  return {
    [theme.breakpoints.down('md')]: {
      width: 0,
    },
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - 240px)`,
    },
  };
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...getAppBarWidth(theme),
  }),
}));

function DashboardScreen() {
  const theme = useTheme();
  const application = useApplication();
  const navigate = useNavigate();
  const location = useLocation();
  const feature = useFeature(
    () => new DashboardFeature(application, navigate, location),
    [location],
  );

  const isOnMobileMode = useIsOnMobile();

  const renderAppBar = () => {
    return (
      <AppBar
        position="fixed"
        open={feature.open}
        sx={{ backgroundColor: theme.colors.background, boxShadow: 'none' }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={feature.handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(feature.open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };

  const renderDrawer = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          backgroundColor: theme.colors.lightBackground,
          overflow: 'hidden',
        }}
      >
        <CssBaseline />
        {!isOnMobileMode && renderAppBar()}
        <MaiaDrawer
          open={feature.open}
          handleDrawerClose={feature.handleDrawerClose}
          handleDrawerOpen={feature.handleDrawerOpen}
          logOut={feature.logOut}
          isOnMobileMode={isOnMobileMode}
          optionSelected={feature.optionSelected}
          setOptionSelected={(option) => feature.setOptionSelected(option)}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            backgroundColor: theme.colors.background,
            minHeight: '100vh',
            paddingTop: '4rem',
          }}
        >
          <Box id="detail" sx={{ paddingLeft: 3, paddingRight: 3, paddingTop: 2 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    );
  };

  return feature && renderDrawer();
}

export default observer(DashboardScreen);
