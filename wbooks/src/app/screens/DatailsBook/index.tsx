import React from 'react';
import DetailsBook from '@app/components/BookDetail';
import { View } from 'react-native';

import styles from './styles';

function DetailBook() {
  return (
    <View style={styles.screen}>
      <DetailsBook />
    </View>
  );
}
export default DetailBook;
