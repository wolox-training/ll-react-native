import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Comment from '@components/Comments';
import { CommentProps } from '@interfaces/CommentProps';
import { COMMENTS_MOCK } from '@constants/mockComments';

const BookList = () => {
  const keyExtractor = (item: CommentProps, index: number) => {
    const key = item.id + index;
    return key.toString();
  };
  const renderItem = ({ item }: { item: CommentProps; index: number }) => {
    return <Comment id={item.id} url={item.url} author={item.author} text={item.text} />;
  };
  return (
    <SafeAreaView>
      <FlatList data={COMMENTS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default BookList;
