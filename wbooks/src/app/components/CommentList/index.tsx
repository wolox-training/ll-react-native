import React, { useState } from 'react';
import { SafeAreaView, FlatList, Button } from 'react-native';
import Comment from '@app/components/Comment';
import { CommentProps } from '@interfaces/CommentProps';
import { COMMENTS_MOCK } from '@constants/mockComments';

const CommentList = () => {
  const [pressed, setValue] = useState(false);
  const keyExtractor = (item: CommentProps) => {
    const key = item.id;
    return key.toString();
  };
  const renderItem = ({ item }: { item: CommentProps }) => {
    return <Comment id={item.id} url={item.url} author={item.author} text={item.text} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={pressed ? COMMENTS_MOCK : COMMENTS_MOCK.slice(0, 2)}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <Button title="View All" onPress={() => setValue(true)} />
    </SafeAreaView>
  );
};

export default CommentList;
