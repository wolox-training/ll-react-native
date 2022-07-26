import React from 'react';
import CommentsList from '@app/components/CommentList';
import BookDetail from '@app/components/BookDetail';
import { View } from 'react-native';

import styles from './styles';

function BookDetails() {
  return (
    <View style={styles.screen}>
      <BookDetail />
      <View style={styles.commentsContainer}>
        <CommentsList />
      </View>
    </View>
  );
}
export default BookDetails;
