import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import * as React from "react";
import {styled, useTheme} from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import MaiaIconButton from "./buttons/MaiaIconButton";
import MenuIcon from '@mui/icons-material/Menu';
import {observer} from "mobx-react";

const getDrawerWidth = (theme) => {
  return {
    [theme.breakpoints.down('md')]: {
      width: '90%'
    },
    [theme.breakpoints.up('md')]: {
      width: '240px'
    },
  };
}

const openedMixin = (theme) => {
  return {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    ...getDrawerWidth(theme)
  }
};

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: theme.colors.lightBackground,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
  ({theme, open}) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function BasicDrawer({
                      open,
                      handleDrawerClose,
                      handleDrawerOpen,
                      optionSelected,
                      isOnMobileMode,
                      setOptionSelected,
                      logOut
                    }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const style = styles(theme);

  const renderListItem = (text, open, icon, onClick, sendToBottom) => {
    const color = optionSelected === text ? 'black' : theme.colors.darkGrey;
    const backgroundColor = optionSelected === text ? 'white' : theme.colors.lightBackground;
    return (
      <ListItem key={text}
                sx={{
                  display: 'block', color: color, backgroundColor: backgroundColor, width: '90%',
                  padding: '5px',
                  borderRadius: '15px',
                  marginTop: sendToBottom ? 'auto' : '0',
                }}
                onClick={onClick}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              color: color,
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{opacity: open ? 1 : 0}}/>
        </ListItemButton>
      </ListItem>
    );
  }

  const drawerVariant = isOnMobileMode ? 'temporary' : 'permanent';


  const openMenuButton = () => {
    return (
      <div style={{position: 'absolute', top: '10px', left: '10px'}}>
        <MaiaIconButton icon={MenuIcon}
                        title={'Menu'}
                        iconSize={'2rem'}
                        onClick={handleDrawerOpen}/>
      </div>
    )
  }

  const listItems = () => {
    return (
      <>
        {renderListItem('Inicio', open, <BookmarkBorderIcon/>, () => {
          setOptionSelected('Inicio');
          navigate('/');
        })}
        {renderListItem('Vista 1', open, <PeopleOutlineIcon/>, () => {
          setOptionSelected('Vista 1');
          navigate('patients');
        })}
        {renderListItem('Cerrar sesión', open, <LogoutIcon/>, logOut, true)}
      </>
    )
  }


  if (isOnMobileMode) {
    return (
      <>
        {!open && openMenuButton()}
        {
          open && <div style={{display: open, ...style.mobileDrawer}}>
            <List sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={style.mobileNavBar}>
                <Typography variant="h6" noWrap component="div" color={theme.text.primary} fontWeight={'800'}>
                  Ejemplo
                </Typography>
                <MaiaIconButton icon={ChevronLeftIcon} title={"Cerrar"} onClick={handleDrawerClose}/>
              </div>
              {listItems()}
            </List>
          </div>
        }
      </>
    )
  } else {
    return (
      <Drawer variant={drawerVariant} open={open} PaperProps={{
        sx: {
          backgroundColor: theme.colors.lightBackground,
          color: "white",
        }
      }}>
        <DrawerHeader style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
          <Typography variant="h6" noWrap component="div" color={theme.text.primary} fontWeight={'800'}>
            Ejemplo
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '10px'
        }}>
          {listItems()}
        </List>
      </Drawer>
    )
  }
}

export default observer(BasicDrawer);

const styles = (theme) => {
  return {
    mobileDrawer: {
      height: '100vh',
      width: '100vw',
      position: 'absolute',
      zIndex: '1000',
      background: theme.palette.primary.dark,
      display: 'flex',
    },
    mobileNavBar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      padding: '1rem',
      alignItems: 'center',
    }
  }
}