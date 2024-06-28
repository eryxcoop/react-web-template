import { useTheme } from '@mui/material';
import LineButton from '../components/buttons/LineButton';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';
import { useApplication } from '../providers/ApplicationProvider';
import LoginFeature from '../features/LoginFeature';
import Line from '../components/Line';
import { observer } from 'mobx-react';
import { ToastAlert } from '../components/ToastAlert';

function LoginScreen() {
  const theme = useTheme();
  const app = useApplication();
  const feature = new LoginFeature(app);
  const style = styles(theme);

  return (
    <main style={style.mainContainer}>
      <div style={style.loginBoxContainer}>
        <Typography variant="h4" color={theme.text.primary}>
          Ejemplo
        </Typography>
        {feature.errorInLogIn && <ToastAlert message="Error al iniciar sesión" />}
        <Line />
        <Typography variant="h6" color={theme.text.primary}>
          Ingresá
        </Typography>
        <LineButton onClick={feature.login} fullWidth>
          <GoogleIcon /> Google
        </LineButton>
      </div>
    </main>
  );
}

export default observer(LoginScreen);

const styles = (theme) => ({
  mainContainer: {
    backgroundColor: theme.colors.background,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBoxContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    borderRadius: 8,
    border: '1px solid',
    borderColor: theme.colors.darkGrey,
    minWidth: 300,
    minHeight: 300,
    padding: '2rem',
  },
});
