import { Field, createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { FormItem, Input, Select } from '@formily/antd-v5';
import { FC, useEffect, useMemo } from 'react';
import { useGetData } from '@/hooks/useGetData';

const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    FormItem,
  },
});

const form = createForm();

export const FormComponent: FC = () => {
  const options = useGetData('https://fakestoreapi.com/products');

  useEffect(() => {
    if (options?.length) {
      form.setFieldState('select', (state) => {
        (state as Field).setDataSource(options);
      });
    }
  }, [options]);

  const schema = useMemo(
    () => (
      <SchemaField>
        <SchemaField.String
          name="input"
          x-component="Input"
          x-decorator="FormItem"
        />
        <SchemaField.String
          name="select"
          x-decorator="FormItem"
          x-component="Select"
        />
      </SchemaField>
    ),
    [],
  );

  return (
    <div
      style={{
        paddingTop: 10,
      }}
    >
      <FormProvider form={form}>{schema}</FormProvider>
    </div>
  );
};
