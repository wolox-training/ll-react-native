import React from 'react';
import { View } from 'react-native';
import BookDetails from '@app/components/BookDetails';

import styles from './styles';

function BookDetail() {
  return (
    <View style={styles.home}>
      <BookDetails />
    </View>
  );
}
export default BookDetails;
