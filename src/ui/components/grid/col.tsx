import React, { CSSProperties } from 'react';
import cx from 'classnames';
import styles from './styles.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties | undefined;
  s?: number | string;
  m?: number | string;
  l?: number | string;
  children: React.ReactNode;
}

const Col: React.FC<Props> = ({ className, s, m, l, style, children, ...props }: Props) => (
  <div {...props} className={cx(styles[`col${s}`], styles[`col${m}`], styles[`col${l}`], className)} style={style}>
    {children}
  </div>
);

Col.defaultProps = {
  style: undefined,
  s: 1,
  m: 1,
  l: 1,
};

export default Col;
