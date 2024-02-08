interface SortConfig {
  field: string;
  sort: 'asc' | 'desc';
}

interface DataObject {
  [key: string]: string;
}

function multiSort(
  data: Array<DataObject>,
  sortConfigs: Array<SortConfig>,
): Array<DataObject> {
  return data.sort((a, b) => {
    for (const config of sortConfigs) {
      if (a[config.field] < b[config.field]) {
        return config.sort === 'asc' ? -1 : 1;
      }
      if (a[config.field] > b[config.field]) {
        return config.sort === 'asc' ? 1 : -1;
      }
    }

    return 0;
  });
}

// Пример использования:
const data = [
  { name: 'Evan', date: '2020', time: '22.30', value: 'men', id: '1' },
  { name: 'Sanny', date: '2021', time: '22.40', value: 'men', id: '2' },
  { name: 'Olaf', date: '2025', time: '22.00', value: 'men', id: '3' },
];

const sortConfigs = [
  { field: 'id', sort: 'asc' },
  { field: 'value', sort: 'desc' },
];

console.log(multiSort(data, sortConfigs));
