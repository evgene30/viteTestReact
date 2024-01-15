import React, { useState } from 'react';

type TSort = { fieldId: string | null; sort: string | null };
export const SortableTable = () => {
  const [sortConfig, setSortConfig] = useState([]);
  console.log(sortConfig);

  const requestSort = (fieldId: string) => {
    setSortConfig((currentSortConfig) => {
      const updatedSortConfig = [...currentSortConfig];
      const existingSortIndex = updatedSortConfig.findIndex(
        (config) => config.fieldId === fieldId,
      );

      if (existingSortIndex > -1) {
        if (updatedSortConfig[existingSortIndex].sort === 'asc') {
          updatedSortConfig[existingSortIndex].sort = 'desc';
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
            {currentSortConfig
              ? currentSortConfig.sort === 'asc'
                ? ' ↑'
                : ' ↓'
              : ''}
          </th>
        );
      })}
    </tr>
  );
  const renderTableRows = () => {
    const sortedData = [...sortConfig];
    if (sortConfig.sort !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.fieldId] < b[sortConfig.fieldId]) {
          return sortConfig.sort === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.fieldId] > b[sortConfig.fieldId]) {
          return sortConfig.sort === 'asc' ? 1 : -1;
        }

        return 0;
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
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};
