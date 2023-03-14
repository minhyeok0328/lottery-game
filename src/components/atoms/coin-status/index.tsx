import { Image, Text, View } from 'react-native';
import styles from '@components/atoms/coin-status/styles';

const coinImage = require('@assets/images/coin.png');

interface ICoinStatus {
  coinCount: number;
}

export default function CoinStatus({ coinCount }: ICoinStatus) {
  return (
    <View style={styles.wrapper}>
      <Image source={coinImage} style={styles.coin} />
      <Text style={styles.status}>{coinCount}냥</Text>
    </View>
  );
}
