import React from 'react';
import CommentList from '@app/components/CommentList';
import BookDetail from '@app/components/BookDetail';
import { View } from 'react-native';

import styles from './styles';

function BookDetails() {
  return (
    <View style={styles.screen}>
      <BookDetail />
      <CommentList />
    </View>
  );
}
export default BookDetails;
