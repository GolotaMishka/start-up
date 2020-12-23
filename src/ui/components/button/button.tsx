import React from 'react';
import cx from 'classnames';
import { Text } from '../text';
import { Icon } from '../icon';
import s from './styles.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  icon?: any;
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  disabled,
  icon,
  ...props
}: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cx(s.button, s.buttonPrimary, className)} disabled={disabled} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text color={Text.colors.white} size={Text.sizes.m} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </button>
);

export const SecondaryButton: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  disabled,
  icon,
  ...props
}: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cx(s.button, s.buttonSecondary, className)} disabled={disabled} {...props}>
    {icon && <Icon className={s.buttonSecondaryIcon} icon={icon} />}
    <Text color={Text.colors.primary} size={Text.sizes.m} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </button>
);
