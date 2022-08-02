import React from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import Book, { BookProps } from '@components/Book';
import { useSelector, useDispatch } from 'react-redux';

const BookList = () => {
  const keyExtractor = (item: BookProps, index: number) => {
    const key = item.id + index;
    return key.toString();
  };
  const renderItem = ({ item }: { item: BookProps; index: number }) => {
    return (
      <Book id={item.id} title={item.title} author={item.author} imageUrl={item.imageUrl} year={item.year} />
    );
  };

  const newBook = {
    author: 'Anthony Doerr',
    genre: 'suspense',
    id: 6,
    imageUrl: null,
    publisher: 'Scribner',
    title: 'All the Light We Cannot See',
    year: '2014'
  };
  const dispatch = useDispatch();
  const addBook = () => dispatch({ type: 'ADD_BOOK', payload: newBook });

  const books = useSelector(state => state.bookList);
  console.log(books);
  return (
    <SafeAreaView>
      <Button title="ADD BOOK" onPress={addBook} />
      <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default BookList;
