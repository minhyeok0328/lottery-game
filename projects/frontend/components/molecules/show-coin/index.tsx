import { memo } from 'react';
import classNames from 'classnames';
import { Icon, Point } from '@/components/atoms';
import coinImage from '@/assets/images/coin.png';

interface Props {
  point: string;
}

function ShowCoin({ point }: Props) {
  return (
    <div className={classNames('grid', 'grid-cols-2', 'items-center', 'gap-2')}>
      <Icon src={coinImage} alt="동전 이미지" title="동전 이미지"/>
      <Point point={point}/>
    </div>
  );
}

export default memo(ShowCoin);
