import { createForm, IFieldFactoryProps } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
  Select,
} from '@formily/antd-v5';
import { FC } from 'react';

export const FormComponent: FC = () => {
  const form = createForm();

  return (
    <div
      style={{
        paddingTop: 10,
      }}
    >
      <FormProvider form={form}>
        <FormLayout layout="vertical">
          <Field
            name="Код"
            title="Ведите текст"
            required
            decorator={[FormItem]}
            component={[Input]}
          />
        </FormLayout>
        <FormLayout layout="vertical">
          <Field
            name="Селект"
            required
            decorator={[FormItem]}
            title="Выберите значение"
            component={[
              Select,
              {
                placeholder: 'Выберите значение',
                options: [{ label: '2', value: '2' }],
                allowClear: true,
              },
            ]}
            visible={false}
          />
        </FormLayout>
        <FormConsumer>
          {() => (
            <div
              style={{
                marginBottom: 20,
                padding: 5,
                border: '1px solid #666',
              }}
            >
              Real-time response：{form.values['Код']}
            </div>
          )}
        </FormConsumer>
        <FormButtonGroup>
          <Submit
            onSubmit={(val) => {
              if (val.Код === '123') {
                const fieldSelect: Field = form.fields['Селект'];
                console.log(fieldSelect);
                fieldSelect.visible = true;
                fieldSelect.props.component[1].options = [
                  { label: '1', value: '1' },
                ];
              } else {
                form.setValues(val);
              }
            }}
          >
            Submit
          </Submit>
        </FormButtonGroup>
      </FormProvider>
    </div>
  );
};
