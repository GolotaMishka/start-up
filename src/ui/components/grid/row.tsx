import React from 'react';
import css from 'classnames';

import s from './styles.scss';

interface Props {
  className?: string | null;
  children: React.ReactNode;
}
const Row: React.FC<Props> = ({ className, children, ...props }: Props) => (
  <div className={css(s.row, className)} {...props}>
    {children}
  </div>
);

Row.defaultProps = {
  className: null,
};
export default Row;
