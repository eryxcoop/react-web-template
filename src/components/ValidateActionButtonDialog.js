import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';
import LineButton from './buttons/LineButton';
import FilledButton from './buttons/FilledButton';

export default function ValidateActionButtonDialog({
  label,
  onConfirm,
  acceptLabel,
  title,
  subText,
}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <>
      <FilledButton title={label} onClick={() => setOpen(true)}>
        {label}
      </FilledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{subText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <LineButton onClick={handleClose} lightMode={true}>
            Cancelar
          </LineButton>
          <FilledButton onClick={handleAccept} autoFocus>
            {acceptLabel}
          </FilledButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
