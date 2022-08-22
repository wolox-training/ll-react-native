import React from 'react';
import { Text, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '@redux/book/actions';
import { State } from '@interfaces/state';

import styles from './styles';

function AddBook() {
  const books = useSelector((state: State) => state.book.booksList);
  const dispatch = useDispatch();
  const onPress = () => {
    const newBooks = books;
    newBooks.push(books[0]);
    dispatch(actionCreators.setBooks(newBooks));
  };
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.button}>ADD BOOK</Text>
    </Pressable>
  );
}

export default AddBook;
