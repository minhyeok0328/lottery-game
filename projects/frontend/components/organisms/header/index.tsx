import React, { memo, useCallback } from 'react';
import { numberFormat } from '@/utils';
import { Lnb, ShowCoin } from '@/components/molecules';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { showLnb } from '@/store/common';

function Header() {
  const [lnb, setLnb] = useAtom(showLnb);

  const handleClickLnb = useCallback(() => {
    setLnb(!lnb);
  }, [lnb]);

  return (
    <div className={classNames('grid', 'grid-cols-2', 'justify-between', 'items-center', 'px-4', 'py-1')}>
      <Lnb showLnb={lnb} onClick={handleClickLnb}/>

      <div className={classNames('w-36')}>
        <ShowCoin point={numberFormat(30000)}/>
      </div>
    </div>
  );
}

export default memo(Header);
