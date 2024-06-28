import { useTheme } from '@mui/material';

export default function Line() {
  const theme = useTheme();
  const style = styles(theme);

  return <div style={style.line} />;
}

const styles = (theme) => ({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.darkGrey,
    margin: '1rem 0',
  },
});
