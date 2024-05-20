import {useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function FormFieldBase({label = undefined, children}) {
  const theme = useTheme();
  const style = styles(theme);

  return (
    <div style={style.fieldContainer}>
      {label && <Typography variant="body1" style={style.labelStyle}>
        {label}
      </Typography>}
      {children}
    </div>
  );
}

const styles = (theme) => ({
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    gap: theme.spacing(1),
  },
  labelStyle: {
    fontWeight: '800',
    backgroundColor: theme.colors.lightBackground,
    padding: '0.5rem',
    color: theme.colors.lightBlue,
  },
});