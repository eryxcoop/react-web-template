import {useTheme} from "@mui/material";

export default function MaiaIconButton({
                                         icon,
                                         title,
                                         onClick,
                                         backgroundColor = undefined,
                                         iconColor = undefined,
                                         iconSize = undefined,
                                         disabled = false,
                                         extraStyles = {}
                                       }) {
  const theme = useTheme();
  const style = styles(theme, iconColor, backgroundColor, disabled);
  const Icon = icon;

  return (
    <button style={{...style.button, ...extraStyles}} title={title} onClick={onClick} disabled={disabled}>
      <Icon style={{height: iconSize || '1em', width: iconSize || '1em'}}/>
    </button>
  );
}


const styles = (theme, iconColor, backgroundColor, disabled) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    background: backgroundColor || 'none',
    color: disabled ? theme.colors.disabledButton : iconColor || theme.colors.button,
    padding: '0px',
    width: 'fit-content',
    border: 'none',
    cursor: 'pointer',
  },
});