import React from 'react';
import { View } from 'react-native';
import DetailsBook from '@app/components/BookDetail';

import styles from './styles';

function DetailBook() {
  return (
    <View style={styles.home}>
      <DetailsBook />
    </View>
  );
}
export default DetailBook;
