import { Field, createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { Checkbox, FormItem, Input, Select } from '@formily/antd-v5';
import { FC, useEffect, useMemo } from 'react';
import { Button } from 'antd';
import { useGetData } from '@/hooks/useGetData';

const SchemaField = createSchemaField({
  components: {
    Input,
    Select,
    FormItem,
    Checkbox,
  },
});

const form = createForm();

export const FormComponent: FC = () => {
  const options = useGetData('https://fakestoreapi.com/products');

  useEffect(() => {
    if (options?.length) {
      form.setFieldState('значение', (state) => {
        (state as Field).setDataSource(options);
      });
    }
  }, [options]);

  const schema = useMemo(
    () => (
      <SchemaField>
        <SchemaField.String
          title="Чекбокс"
          name="чекбокс"
          x-component="Checkbox"
          x-decorator="FormItem"
        />
        <SchemaField.String
          required
          title="Текст"
          name="текст"
          x-component="Input"
          x-decorator="FormItem"
          x-component-props={
            {
              placeholder: 'Введите текст',
            } as any
          }
        />
        <SchemaField.String
          title="Значение"
          name="значение"
          x-decorator="FormItem"
          x-component="Select"
          x-component-props={
            {
              placeholder: 'Выберите значение',
            } as any
          }
        />
      </SchemaField>
    ),
    [],
  );

  return (
    <div
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FormProvider form={form}>{schema}</FormProvider>
      <Button
        type="primary"
        onClick={async () => {
          await form.validate();
          if (form.valid) {
            console.log(form.values);
          }
        }}
        style={{ width: 100 }}
      >
        Отправить
      </Button>
    </div>
  );
};
