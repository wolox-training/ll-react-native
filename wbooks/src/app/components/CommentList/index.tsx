import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import Comment from '@app/components/Comment';
import { CommentProps } from '@interfaces/CommentProps';
import { COMMENTS_MOCK } from '@constants/mockComments';

const CommentList = () => {
  const keyExtractor = (item: CommentProps) => {
    const key = item.id;
    return key.toString();
  };
  const renderItem = ({ item }: { item: CommentProps }) => {
    return <Comment id={item.id} url={item.url} author={item.author} text={item.text} />;
  };
  return (
    <SafeAreaView>
      <FlatList data={COMMENTS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default CommentList;
