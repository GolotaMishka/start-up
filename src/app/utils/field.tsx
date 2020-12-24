/* eslint-disable */
import * as React from 'react';
import { FieldMetaProps, useFormikContext, useField } from 'formik';

export interface FormFieldComponent extends FieldMetaProps<any> {
  value: string | number;
  name: string;
  multiple?: boolean;
  checked?: boolean;
  onChange: React.ChangeEventHandler;
  onBlur: () => void;
  ref: React.RefObject<HTMLDivElement>;
}

export interface FormFieldProps {
  component: keyof JSX.IntrinsicElements | React.ComponentType<FormFieldComponent> | React.ComponentType;
  name: string;
  value?: any;
  type?: string;
  ref?: (instance: any) => void;
  valueAdapter: (...args: any) => any;
  onChangeAdapter: (...args: any) => any;
  id: string;
  children: React.ReactNode;
  className?: string;
  placeholder?: string;
  title?: string;
  [key: string]: any;
}

const Field = React.forwardRef<any, FormFieldProps>((props: FormFieldProps, ref) => {
  if (!props.name) {
    console.warn(`Your field doesn't have any name property.`);
  }

  const formik = useFormikContext();
  const [field, meta] = useField(props);

  const { component, valueAdapter, onChangeAdapter, children, ...leftProps } = props;

  const onChange = (...args) => {
    formik.setFieldValue(props.name as never, onChangeAdapter(...args));
  };

  const onBlur = () => {
    formik.setFieldTouched(props.name as never, true);
  };

  const fieldProps = {
    ...field,
    ...leftProps,
    ...meta,
    value: valueAdapter ? valueAdapter(field.value) : field.value,
    onChange: !!onChangeAdapter ? onChange : field.onChange,
    onBlur,
    ref,
    setFieldValue: formik.setFieldValue,
  };

  return React.createElement<any>(component, fieldProps, children);
});

Field.displayName = 'Field';

export { Field };
