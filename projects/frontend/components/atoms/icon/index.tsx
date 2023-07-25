import classNames from 'classnames';
import { memo } from 'react';

interface Props {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

function Icon({ src, alt, title, className = '' }: Props) {
  return (
    <div className={classNames('icon', className)}>
      <img src={src} alt={alt} title={title}/>
    </div>
  );
}

export default memo(Icon);
