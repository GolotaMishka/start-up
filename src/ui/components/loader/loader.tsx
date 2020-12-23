import React from 'react';
import cx from 'classnames';

import s from './styles.scss';

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
const BaseLoader: React.FC<LoaderProps> = ({ className }: LoaderProps) => (
  <div className={cx(s.baseLoader, className)} />
);

export const ContentLoader: React.FC = () => <BaseLoader className={s.contentLoader} />;

export const Loader: React.FC = () => (
  <div className={s.wrapper}>
    <BaseLoader className={s.loader} />
  </div>
);
