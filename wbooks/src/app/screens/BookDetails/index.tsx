import React from 'react';
import CommentsList from '@app/components/CommentList';
import BookDetail from '@app/components/BookDetail';
import { View, ScrollView } from 'react-native';

import styles from './styles';

function BookDetails() {
  return (
    <ScrollView>
      <BookDetail />
      <View style={styles.commentsContainer}>
        <CommentsList />
      </View>
    </ScrollView>
  );
}
export default BookDetails;
