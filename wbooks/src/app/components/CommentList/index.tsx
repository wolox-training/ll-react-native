import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Pressable } from 'react-native';
import Comment from '@components/Comment';
import { CommentProps } from '@interfaces/CommentProps';
import { COMMENTS_MOCK } from '@constants/mockComments';
import { useDispatch } from 'react-redux';
import { actionCreators } from '@redux/commentsBooks/actions';

import styles from './styles';

const CommentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getCommentsBook());
  }, [dispatch]);
  const [pressed, setPressed] = useState(false);
  const data = pressed ? COMMENTS_MOCK : COMMENTS_MOCK.slice(0, 2);
  const renderList = data.map((item: CommentProps) => {
    return <Comment id={item.id} url={item.url} author={item.author} text={item.text} key={item.id} />;
  });
  return (
    <SafeAreaView>
      {renderList}
      <Pressable onPress={() => setPressed(true)}>
        <Text style={styles.button}>View All</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CommentList;
