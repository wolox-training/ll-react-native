import React from 'react';
import { SafeAreaView, FlatList, Pressable } from 'react-native';
import Book, { BookProps } from '@components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { useNavigation } from '@react-navigation/native';

const BookList = () => {
  const navigation = useNavigation();
  const keyExtractor = (item: BookProps, index: number) => {
    const key = item.id + index;
    return key.toString();
  };
  const renderItem = ({ item }: { item: BookProps; index: number }) => {
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            undefined
          })
        }>
        <Book id={item.id} title={item.title} author={item.author} imageUrl={item.imageUrl} />
      </Pressable>
    );
  };
  return (
    <SafeAreaView>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default BookList;
