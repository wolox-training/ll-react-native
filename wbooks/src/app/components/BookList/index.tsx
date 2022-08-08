import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Book from '@components/Book';
import { BookProps } from '@interfaces/BookProps';
import { useSelector } from 'react-redux';
import { State } from '@interfaces/state';

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
  const books = useSelector((state: State) => state.book.booksList);
  return (
    <SafeAreaView>
      <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default BookList;
