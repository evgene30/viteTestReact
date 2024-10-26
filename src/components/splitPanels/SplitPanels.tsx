import { Button } from '@mui/material';
import { useState } from 'react';
import { Pane, ResizablePanes } from 'resizable-panes-react';

export const SplitPanels = () => {
  const [value, setValue] = useState(true);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <Button
        variant="contained"
        onClick={() => setValue(!value)}
        style={{ width: '200px' }}
      >
        Close panel
      </Button>
      <ResizablePanes
        uniqueId="resize-panel"
        vertical
        resizerSize={4}
        storageApi={localStorage}
        visibility={{
          P0: value,
          P1: true,
          P2: true,
        }}
      >
        <Pane id="P0" size={2} minSize={1}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#ff5f00b8',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              borderRadius: '6px',
            }}
          >
            Your component 1
          </div>
        </Pane>
        <Pane id="P1" size={2} minSize={1}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#5ca376eb',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              borderRadius: '6px',
            }}
          >
            Your component 2
          </div>
        </Pane>
        <Pane id="P2" size={2} minSize={1}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#80808094',
              padding: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              borderRadius: '6px',
            }}
          >
            Your component 3
          </div>
        </Pane>
      </ResizablePanes>
    </div>
  );
};
