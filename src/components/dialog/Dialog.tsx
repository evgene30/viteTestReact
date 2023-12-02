import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/system';
import { SelectLabels } from '../select';

type TStateData = { Option: string; switch: boolean };

export const DialogSelect = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TStateData>();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk = () => {
    console.log(data);
  };

  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          Tested form
        </DialogTitle>
        <DialogContent>
          <SelectLabels setData={setData} />
        </DialogContent>
        <DialogActions sx={{ gap: '10px' }}>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleOk}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
