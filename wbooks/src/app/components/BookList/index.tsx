import React from 'react';
import { SafeAreaView, FlatList, Pressable } from 'react-native';
import Book, { BookProps } from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

const BookList = () => {
  const keyExtractor = (item: BookProps, index: number) => {
    const key = item.id + index;
    return key.toString();
  };
  const renderItem = ({ item }: { item: BookProps; index: number }) => {
    return <Book id={item.id} title={item.title} author={item.author} imageUrl={item.imageUrl} />;
  };
  return (
    <SafeAreaView>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default BookList;
