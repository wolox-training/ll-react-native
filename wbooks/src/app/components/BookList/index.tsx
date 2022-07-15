import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Book, { BookProps } from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

const BookList = () => {
  const keyExtractor = (item: BookProps) => `${item.id}`;
  const renderItem = ({ item }: { index: number; item: BookProps }) => {
    return <Book title={item.title} author={item.author} imageUrl={item.imageUrl} id={item.id} />;
  };

  return (
    <SafeAreaView>
      <FlatList data={BOOKS_MOCK} keyExtractor={keyExtractor} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default BookList;
