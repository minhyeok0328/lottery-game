import { Image, StyleSheet, Text, View } from 'react-native';

const coinImage = require('../../../assets/images/coin.png');

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

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  status: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'EF_jejudoldam',
  },
  coin: {
    width: 55,
    height: 55,
  },
});
