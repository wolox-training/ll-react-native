import React, { useState } from 'react';
import { SafeAreaView, Text, Pressable } from 'react-native';
import Comment from '@app/components/Comment';
import { CommentProps } from '@interfaces/CommentProps';
import { COMMENTS_MOCK } from '@constants/mockComments';

const CommentList = () => {
  const [pressed, setPressed] = useState(false);
  const data = pressed ? COMMENTS_MOCK : COMMENTS_MOCK.slice(COMMENTS_MOCK.length - 2, COMMENTS_MOCK.length);
  const renderList = data.map((item: CommentProps) => {
    return <Comment id={item.id} url={item.url} author={item.author} text={item.text} key={item.id} />;
  });
  return (
    <SafeAreaView>
      {renderList}
      <Pressable onPress={() => setPressed(true)}>
        <Text>View All</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CommentList;
