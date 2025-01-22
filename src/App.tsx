import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { TableComponent, Option } from './components/Table';
import { generateRandomOptions } from './utils/utils';

const App: FC = () => {
  const [data, setData] = useState<Option[]>([]);
  const [options, setOptions] = useState<Option[]>(generateRandomOptions(6));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get<Option[]>('https://api.hh.ru/areas');
        setData(
          resp.data.map((item: Option) => ({
            label: (item as any).name,
            value: (item as any).name,
            field: item.field,
            link: item.link,
          })),
        );
      } catch (error) {
        console.log(error);
      }
    };
    void fetchData();
  }, []);

  return (
    <div style={{ width: '1160px', margin: '0 auto' }}>
      <TableComponent options={options} setOptions={setOptions} data={data} />
    </div>
  );
};

export default App;
