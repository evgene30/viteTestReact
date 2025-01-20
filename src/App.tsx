import { FC, useState } from 'react';
import { TableComponent, Option } from './components/Table';

const App: FC = () => {
  const [options, setOptions] = useState<Option[]>([
    { label: 'Secret', field: '2323', link: '12122' },
  ]);

  return (
    <div style={{ width: '1160px', margin: '0 auto' }}>
      <TableComponent options={options} setOptions={setOptions} />
    </div>
  );
};

export default App;
