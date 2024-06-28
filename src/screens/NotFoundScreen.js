import { useTheme } from '@mui/material';
import FilledButton from '../components/buttons/FilledButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function NotFoundScreen() {
  const theme = useTheme();
  const style = styles(theme);
  const navigate = useNavigate();

  return (
    <section style={style.mainContainer}>
      <Typography variant="body1" fontWeight={'500'}>
        Pareces haberte perdido. Nos pasa a todos en algún momento.
      </Typography>
      <FilledButton onClick={() => navigate('/')}>Volver</FilledButton>
    </section>
  );
}

const styles = () => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    gap: 16,
  },
  image: {
    width: '900px',
  },
});
