import React from 'react';
import { Table, Button, Tooltip, Select, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export interface Option {
  label: string;
  field: string;
  link: string;
}

interface MyTableComponentProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  data: Option[];
}

export const TableComponent: React.FC<MyTableComponentProps> = ({
  options,
  setOptions,
  data,
}) => {
  const handleDelete = (record: Option) => {
    setOptions(options.filter((item) => item.field !== record.field));
  };

  const handleChange = (value: unknown, record: Option) => {
    setOptions((prev: Option[]) =>
      prev.map((item) => {
        if (item.label === record.label) {
          return { ...item, link: value as string };
        }

        return item;
      }),
    );
  };

  const handleInputChange = (value: unknown, record: Option) => {
    setOptions((prev: Option[]) =>
      prev.map((item) => {
        if (item.label === record.label) {
          return { ...item, field: value as string };
        }

        return item;
      }),
    );
  };

  const columns = [
    {
      title: 'Индекс',
      dataIndex: 'Индекс',
      key: 'Индекс',
      render: (text: string, record: Option, index: number) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {index + 1}
        </div>
      ),
      width: '5%',
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
      width: '30%',
    },
    {
      title: 'Input',
      dataIndex: 'Input',
      key: 'Input',
      width: '30%',
      render: (text: string, record: Option) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Input
            value={record.field}
            onChange={(e) => handleInputChange(e.target.value, record)}
          />
        </div>
      ),
    },
    {
      title: 'Select',
      dataIndex: 'Select',
      key: 'Select',
      width: '30%',
      render: (text: string, record: Option) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Select
            value={record.link}
            placeholder="Выберите параметр"
            options={data || []}
            style={{ width: '100%' }}
            onChange={(value) => handleChange(value, record)}
          />
        </div>
      ),
    },
    {
      title: 'Действие',
      key: 'action',
      width: '5%',
      render: (text: string, record: Option) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Tooltip
            title={`Удалить ${record.label}`}
            styles={{ root: { fontSize: '12px', opacity: '0.9' } }}
          >
            <Button
              size="middle"
              shape="circle"
              type="text"
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Table
      rowHoverable={false}
      dataSource={options}
      columns={columns}
      rowKey="field"
      bordered
      pagination={false}
      size="small"
    />
  );
};
