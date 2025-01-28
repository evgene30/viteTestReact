import { FC } from 'react';
import { TableData } from './components/TableComponent';
import { FormComponent } from './components/Form';

const App: FC = () => (
  <div style={{ width: '1160px', margin: '0 auto' }}>
    <TableData />
    <FormComponent />
  </div>
);

export default App;
