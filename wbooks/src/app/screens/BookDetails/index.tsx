import React from 'react';
import Comment from '@app/components/Comments';
import BookDetail from '@app/components/BookDetail';
import { View } from 'react-native';

import styles from './styles';

function BookDetails() {
  return (
    <View style={styles.screen}>
      <Comment />
      <BookDetail />
    </View>
  );
}
export default BookDetails;
