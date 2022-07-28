import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import chevronLeft from '@assets/buttonImages/chevronLeft.png';

import styles from './styles';

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.backButtonMargin}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image source={chevronLeft} />
    </TouchableOpacity>
  );
}

export default BackButton;
