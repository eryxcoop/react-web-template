import {useTheme} from "@mui/material";

export default function LineButton({onClick, children, fullWidth = false, lightMode = false}) {
  const theme = useTheme();
  const style = styles(theme, fullWidth, lightMode);

  return (
    <button style={style.button} onClick={onClick}>
      {children}
    </button>
  );
}

const styles = (theme, fullWidth, lightMode) => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    color: lightMode ? theme.colors.blackText : theme.text.primary,
    background: 'none',
    border: '1px solid',
    borderColor: theme.colors.darkGrey,
    width: fullWidth ? '100%' : 'fit-content',
    padding: '8px 16px',
    borderRadius: 8,
    cursor: 'pointer',
  },
});