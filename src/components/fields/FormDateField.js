import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { observer } from 'mobx-react';
import FormFieldBase from './FormFieldBase';
import { useTheme } from '@mui/material';

function FormDateField({ label, field }) {
  const theme = useTheme();

  return (
    <FormFieldBase label={label}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          fullWidth
          InputLabelProps={{ shrink: false }}
          sx={{ backgroundColor: theme.fields.background, borderRadius: '5px', width: '100%' }}
          value={field.value}
          format="DD-MM-YYYY"
          onChange={(e) => {
            field.updateValue(e);
          }}
        />
      </LocalizationProvider>
    </FormFieldBase>
  );
}

export default observer(FormDateField);
