import {useTheme} from "@mui/material";

export function ToastAlert({severity, message}) {
  const theme = useTheme();
  const style = styles(theme);
  // use toastify ?
  return (
    <div style={style.alertContainer}>
      {message}
    </div>
  );
}

const styles = (theme) => ({
  alertContainer: {
    borderColor: theme.alerts.error,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 2,
    color: theme.text.primary,
    padding: 12,
    width: '100%',
    textAlign: 'center',
  },
});