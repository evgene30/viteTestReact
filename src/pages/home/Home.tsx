import { Box } from '@mui/material';
import { paginationStyles } from '@/pages/home/style';
import { DataTable } from '@/components/table/DataTable';
import { DialogSelect } from '@/components/dialog/Dialog';

export const Home = () => (
  <Box sx={paginationStyles}>
    <DialogSelect />
    <DataTable />
  </Box>
);

// import React, { useState } from 'react';
// import './index.css';
// import { Input } from 'antd';

// const options = [
//   { id: 23, value: 'Text' },
//   { id: 42, value: 'Другой текст' },
// ];

// const App: React.FC = () => {
//   const [selectedId, setSelectedId] = useState(42);

//   const handleChange = (event) => {
//     const selectedOption = options.find(
//       (option) => option.value === event.target.value
//     );
//     setSelectedId(selectedOption?.id ?? null);
//   };

//   return (
//     <Input
//       type="text"
//       variant='filled'
//       value={options.find((option) => option.id === selectedId)?.value ?? ''}
//       onChange={handleChange}
//     />
//   );
// };

// export default App;
