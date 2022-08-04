import React, { useEffect } from 'react';
import { View } from 'react-native';
import BookList from '@app/components/BookList';
import { useDispatch } from 'react-redux';
import addBoks from '@redux/book/actions';

import styles from './styles';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBoks());
  });
  return (
    <View style={styles.home}>
      <BookList />
    </View>
  );
}
export default Home;
