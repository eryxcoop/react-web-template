import {useTheme} from "@mui/material";

export default function FilledButton({children, onClick, fullWidth = false, style = {}, disabled = false}) {
  const theme = useTheme();

  const ownStyle = styles(theme, fullWidth, disabled);

  return (
    <button style={{...ownStyle.button, ...style}} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

const styles = (theme, fullWidth, disabled) => ({
  button: {
    backgroundColor: disabled ? theme.colors.disabledButton : theme.colors.button,
    color: theme.text.primary,
    padding: '8px 16px',
    width: fullWidth ? '100%' : 'fit-content',
    borderRadius: 8,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});