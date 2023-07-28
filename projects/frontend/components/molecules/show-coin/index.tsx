import { memo } from 'react';
import classNames from 'classnames';
import { Icon, Point } from '@/components/atoms';
import CoinImage from '@/assets/images/coin.png';

interface Props {
  point: string;
}

function ShowCoin({ point }: Props) {
  return (
    <div className={classNames('grid', 'grid-cols-2', 'items-center', 'gap-2')}>
      <Icon src={CoinImage} alt="동전 이미지" title="동전 이미지" width={500} height={500}/>
      <Point point={point}/>
    </div>
  );
}

export default memo(ShowCoin);
