import React from 'react';
import BookDetail from '@app/components/BookDetail';
import { View } from 'react-native';

import styles from './styles';

function BookDetails() {
  return (
    <View style={styles.screen}>
      <BookDetail />
    </View>
  );
}
export default BookDetails;
