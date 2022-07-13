import React from 'react';
import Book from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { View } from 'react-native';

import styles from './styles';

function Home() {
  return (
    <View style={styles.home}>
      <Book {...BOOKS_MOCK[0]} />
    </View>
  );
}
export default Home;
