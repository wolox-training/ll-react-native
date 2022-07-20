import React from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';

import DetailBook from '../DatailsBook';

import styles from './styles';

function Home() {
  return (
    <View style={styles.home}>
      <BookList />
    </View>
  );
}
export default Home;
