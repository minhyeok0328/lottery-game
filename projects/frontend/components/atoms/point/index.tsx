import classNames from 'classnames';
import { memo } from 'react';

interface Props {
  point: string;
  className?: string;
}

function Point({ point, className = '' }: Props) {
  return (
    <div className={classNames('point', 'underline', 'font-bold', className)}>
      {point}
    </div>
  );
}

export default memo(Point);
