import {MenuItem, Select, useTheme} from "@mui/material";
import {observer} from "mobx-react";
import FormFieldBase from "./FormFieldBase";

function FormSelectField({label, field, options}) {
    const theme = useTheme();

    return (
        <FormFieldBase label={label}>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                style={{
                    backgroundColor: theme.fields.background,
                    borderRadius: '5px',
                }}
                InputLabelProps={{shrink: false}}
                fullWidth
                placeholder="Seleccione una opción"
                value={field.value}
                onChange={(e) => field.updateValue(e.target.value)}
            >
                {options.map((option) => {
                    return (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                    );
                })}
            </Select>
        </FormFieldBase>
    );

}

export default observer(FormSelectField);