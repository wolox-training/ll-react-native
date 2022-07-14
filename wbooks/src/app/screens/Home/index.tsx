import React from 'react';
import Book from '@app/components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { View } from 'react-native';
import BookList from '@app/components/BookList';

import styles from './styles';

function Home() {
  return (
    <View style={styles.home}>
      <BookList />
    </View>
  );
}
export default Home;
