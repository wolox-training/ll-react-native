import React from 'react';
import CommentsList from '@app/components/CommentList';
import BookDetail from '@app/components/BookDetail';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

function BookDetails() {
  return (
    <ScrollView style={styles.screen}>
      <BookDetail />
      <View style={styles.commentsContainer}>
        <CommentsList />
      </View>
    </ScrollView>
  );
}
export default BookDetails;
