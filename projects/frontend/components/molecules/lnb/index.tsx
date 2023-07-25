import classNames from 'classnames';
import React, { memo, useCallback } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

// 아래 버튼태그는 임시 나중에 아이콘 나오면 Icon 컴포넌트로 바꿀거임

interface Props {
  showLnb: boolean;
  onClick: () => void;
}

function Lnb({ showLnb, onClick }: Props) {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <div className={classNames('lnb')}>
      <AiOutlineMenu
        className={classNames('text-3xl')}
        onClick={handleClick}
      />

      <div
        className={classNames('flex', 'flex-col', 'align-baseline', 'absolute', 'right-16', 'top-16', 'w-full', 'transition', { 'translate-x-16': showLnb })}>
        <button className={classNames('w-16')}>도감</button>
        <button className={classNames('w-16')}>보관함</button>
        <button className={classNames('w-16')}>상점</button>
      </div>
    </div>
  );
}

export default memo(Lnb);
