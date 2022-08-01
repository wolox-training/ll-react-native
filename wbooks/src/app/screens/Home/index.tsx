import React, { useEffect } from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';
import { useDispatch } from 'react-redux';
import { BOOKS_MOCK } from '@constants/mockBooks';

import styles from './styles';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_BOOKS', payload: BOOKS_MOCK });
  });
  return (
    <View style={styles.home}>
      <BookList />
    </View>
  );
}
export default Home;
