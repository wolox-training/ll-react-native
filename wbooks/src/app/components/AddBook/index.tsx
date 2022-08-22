import React from 'react';
import { Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { actionCreators } from '@redux/addBook/actions';

import styles from './styles';

function AddBook() {
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(actionCreators.addBook());
  };
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.button}>ADD BOOK</Text>
    </Pressable>
  );
}

export default AddBook;
