import {
  Button,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
} from 'react-native';
import { useCallback } from 'react';
import styles from '@components/atoms/base-button/styles';

interface IButton {
  title: string;
  onPress?: () => void;
  source?: ImageSourcePropType;
}

export default function BaseButton({ title, onPress, source }: IButton) {
  const handlePress = useCallback(() => {
    onPress?.();
  }, []);

  return (
    <TouchableHighlight onPress={handlePress} style={styles.wrapper}>
      <>
        {source && <Image source={source} style={styles.source} />}
        <Button title={title} />
      </>
    </TouchableHighlight>
  );
}
