import React from 'react';
import cx from 'classnames';
import { Text } from 'ui/components/text';
import { Icon } from 'ui/components/icon';
import s from './styles.scss';

export interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
}

export const Checkbox: React.FC<CheckboxInputProps> = ({
  label = 'Checkbox',
  checked,
  name,
  id,
  className,
  disabled,
  ...props
}: CheckboxInputProps) => (
  <label htmlFor={id} className={cx(s.checkbox, className)}>
    <input
      className={cx(s.checkboxInput, className)}
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      checked={checked}
      {...props}
    />
    <div className={s.checkboxInputTick}>
      <Icon icon={Icon.icons.check} className={s.checkboxInputTickIcon} />
    </div>
    <Text className={s.checkboxTitle}>{label}</Text>
  </label>
);
