import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Book, { BookProps } from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { useSelector } from 'react-redux';

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
  const books = useSelector(state => state.bookList);
  return (
    <SafeAreaView>
      <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default BookList;
