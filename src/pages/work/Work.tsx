import { Box, Button } from '@mui/material';
import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { workStyle } from './style';
import { CustomSnackbar } from '@/components/snackbar/CustomSnackbar';

interface Window {
  __RUNTIME_CONFIG__: {
    API_URL: string;
    ANOTHER_CONFIG: string;
  };
}

// eslint-disable-next-line no-underscore-dangle
const config = (window as unknown as Window).__RUNTIME_CONFIG__;

export const Work = () => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    // нажатие вне кнопки
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useLayoutEffect(() => {
    const savedStatus = localStorage.getItem('buttonStatus');
    if (savedStatus) {
      setButtonStatus(JSON.parse(savedStatus) as boolean);
    }
  }, []);

  const handleButtonClick = () => {
    const newStatus = !buttonStatus;
    setButtonStatus(newStatus);
    localStorage.setItem('buttonStatus', JSON.stringify(newStatus));
    setOpen(false);
  };

  const handleCheckStatusAndRerender = (): void => {
    const savedStatus = JSON.parse(localStorage.getItem('buttonStatus') || '');
    if (savedStatus) {
      console.log(config);
    }
    setOpen(true);
  };

  function convertSchemaToComponents(schema: any): any {
    const elements = [];

    if (schema.type === 'object' && schema.properties) {
      Object.keys(schema.properties).forEach((key) => {
        const property = schema.properties[key];
        switch (property.type) {
          case 'string':
            elements.push(
              <div key={key} label={property.title} name={key} />,
            );
            break;
          // Добавьте здесь case для других типов...
          default:
            console.warn(`Unsupported type: ${property.type}`);
        }
      });
    }

    return elements as any;
  }

  const schema = {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        title: 'First Name',
      },
      lastName: {
        type: 'string',
        title: 'Last Name',
      },
      items: {
        lastName: {
          type: 'string',
          title: 'Last Name',
        },
      },
    },
  };

  console.log(convertSchemaToComponents(schema));

//   <SchemaField>
//   <SchemaField.String
//     name="firstName"
//     title="First Name"
//     x-component="Input"
//     x-decorator="FormItem"
//   />
//   <SchemaField.String
//     name="lastName"
//     title="Last Name"
//     x-component="Input"
//     x-decorator="FormItem"
//   />
//   <SchemaField.Array
//     name="items"
//     title="Items"
//     x-component="ArrayContainer"
//     x-decorator="FormItem">
//     {({ items }) => items.map((item, index) => (
//       <SchemaField.Object key={index} name={`${item}.lastName`}>
//         <SchemaField.String
//           name="lastName"
//           title="Last Name"
//           x-component="Input"
//           x-decorator="FormItem"
//         />
//       </SchemaField.Object>
//     ))}
//   </SchemaField.Array>
// </SchemaField>

  return (
    <>
      <Box sx={workStyle}>
        {buttonStatus ? (
          <Link target="_blank" to={config.API_URL} reloadDocument>
            <Button
              variant="contained"
              color="success"
              onClick={handleButtonClick}
            >
              Статус: true
            </Button>
          </Link>
        ) : (
          <Button
            variant="contained"
            color="warning"
            onClick={handleButtonClick}
          >
            Статус: false
          </Button>
        )}

        <Button variant="contained" onClick={handleCheckStatusAndRerender}>
          Check status
        </Button>
      </Box>
      <CustomSnackbar
        openBar={open}
        handleClose={handleClose}
        loadStatus={buttonStatus}
      />
    </>
  );
};
