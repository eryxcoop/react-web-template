import { TextField, useTheme } from '@mui/material';
import { observer } from 'mobx-react';
import FormFieldBase from './FormFieldBase';

function FormTextField({
  label = undefined,
  placeholder = undefined,
  field,
  width = '100%',
  disabled = false,
  rows = 1,
}) {
  const theme = useTheme();
  const style = styles(theme, width);

  return (
    <FormFieldBase label={label}>
      <TextField
        placeholder={placeholder || label}
        InputLabelProps={{ shrink: false }}
        disabled={disabled}
        multiline={rows > 1}
        rows={rows}
        style={style.fieldContainer}
        value={field.value}
        onChange={(e) => {
          field.updateValue(e.target.value);
        }}
      />
    </FormFieldBase>
  );
}

const styles = (theme, width) => ({
  fieldContainer: {
    backgroundColor: theme.fields.background,
    justifyContent: 'center',
    borderRadius: '5px',
    height: '42px',
    width: width,
  },
});

export default observer(FormTextField);
