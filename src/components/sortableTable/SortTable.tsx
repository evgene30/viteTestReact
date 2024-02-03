import React, { useState } from 'react';

type TSort = { fieldId: string | null; sort: string | null };
export const SortableTable = () => {
  const [sortConfig, setSortConfig] = useState<Array<TSort>>([]);

  const requestSort = (fieldId: string) => {
    setSortConfig((currentSortConfig) => {
      const updatedSortConfig = [...currentSortConfig];
      const existingSortIndex = updatedSortConfig.findIndex(
        (config) => config.fieldId === fieldId,
      );
      if (existingSortIndex > -1) {
        if (updatedSortConfig[existingSortIndex].sort === 'asc') {
          updatedSortConfig[existingSortIndex].sort = 'desc';
        } else if (updatedSortConfig[existingSortIndex].sort === 'desc') {
          updatedSortConfig[existingSortIndex].sort = null;
        } else if (updatedSortConfig[existingSortIndex].sort === null) {
          updatedSortConfig.splice(existingSortIndex, 1);
        }
      } else {
        updatedSortConfig.push({ fieldId, sort: 'asc' });
      }

      return updatedSortConfig;
    });
  };

  const renderTableHeader = () => (
    <tr>
      {['id', 'name'].map((fieldId) => {
        const currentSortConfig = sortConfig.find(
          (config) => config.fieldId === fieldId,
        );

        return (
          <th key={fieldId} onClick={() => requestSort(fieldId)}>
            {fieldId.toUpperCase()}
            {currentSortConfig &&
              (currentSortConfig.sort === 'asc' ? ' ↑' : ' ↓')}
          </th>
        );
      })}
    </tr>
  );

  const renderTableRows = (sortConf: TSort[]) => {
    const sortedData = [...sortConf];
    if (sortedData.sort !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      sortedData.sort((a, b) => {
        if (String(a.fieldId) < String(b.fieldId)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return sortedData.sort === 'asc' ? -1 : 1;
        }
        if (String(a.fieldId) > String(b.fieldId)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return sortedData.sort === 'asc' ? 1 : -1;
        }

        return '';
      });
    }

    return sortedData.map((row: TSort, index) => (
      <tr key={index as never}>
        <td>{row?.fieldId}</td>
      </tr>
    ));
  };

  return (
    <table>
      <thead>{renderTableHeader()}</thead>
      <tbody>{renderTableRows(sortConfig)}</tbody>
    </table>
  );
};
