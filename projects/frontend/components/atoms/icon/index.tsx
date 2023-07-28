import classNames from 'classnames';
import { memo } from 'react';
import Image from 'next/image';

interface Props extends HTMLImageElement {
  className?: string;
}

function Icon({ className = '', ...props }: Props) {
  return (
    <div className={classNames('icon', className)}>
      <Image
        {...props}
        className={className}
        quality={1}
      />
    </div>
  );
}

export default memo(Icon);
