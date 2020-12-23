import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Text } from '../text';
import { Icon } from '../icon';
import s from './styles.scss';

interface LinkProps extends React.AllHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  to: string;
  icon?: any;
}

export const PrimaryButtonLink: React.FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  icon,
  ...props
}: LinkProps) => (
  <Link className={cx(s.button, s.buttonPrimary, disabled && s.buttonDisabled, className)} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text size={Text.sizes.m} color={Text.colors.white} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </Link>
);
PrimaryButtonLink.defaultProps = {
  icon: null,
};

export const SecondaryButtonLink: React.FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  icon = null,
  ...props
}: LinkProps) => (
  <Link className={cx(s.button, s.buttonSecondary, disabled && s.buttonDisabled, className)} {...props}>
    {icon && <Icon className={s.buttonPrimaryIcon} icon={icon} />}
    <Text size={Text.sizes.m} color={Text.colors.primary} weight={Text.weights.semiBold}>
      {children}
    </Text>
  </Link>
);
SecondaryButtonLink.defaultProps = {
  icon: null,
};
