import React from 'react';
import cx from 'classnames';
import s from './styles.scss';

import close from './icons/close.svg';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  icon: any;
  disabled?: boolean;
  className?: string;
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps> {
  icons: any;
}

export const Icon = React.forwardRef<any, IconProps>(
  ({ icon, className, disabled, ...props }: IconProps, ref): JSX.Element => {
    return (
      <svg
        {...props}
        className={cx(s.icon, className, disabled && s.iconDisabled)}
        viewBox={icon.viewBox}
        ref={ref}
        {...props}
      >
        <use xlinkHref={`#${icon.id}`} />
      </svg>
    );
  },
) as CompoundedComponent;

Icon.icons = {
  close,
};
