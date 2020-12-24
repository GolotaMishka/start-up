import React from 'react';
import cx from 'classnames';
import { Text } from 'ui/components/text';
import s from './styles.scss';

export interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  value?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

export const Radio: React.FC<RadioInputProps> = ({
  label = 'Radio',
  value,
  name,
  id,
  className,
  disabled,
  ...props
}: RadioInputProps) => (
  <label htmlFor={id} className={cx(s.radio, className)}>
    <input
      className={cx(s.radioInput, className)}
      type="radio"
      checked={value === id}
      value={id}
      name={name}
      id={id}
      disabled={disabled}
      {...props}
    />
    <div className={s.radioInputTick} />
    <Text size={Text.sizes.m} className={s.radioTitle}>
      {label}
    </Text>
  </label>
);
