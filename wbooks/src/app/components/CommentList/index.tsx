import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Pressable } from 'react-native';
import Comment from '@components/Comment';
import { CommentProps } from '@interfaces/CommentProps';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@interfaces/state';
import { actionCreators } from '@redux/commentsBooks/actions';

import styles from './styles';

const CommentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreators.getCommentsBook());
  }, [dispatch]);
  const booksComments = useSelector((state: State) => state.commentsBook.commentsList);
  const [pressed, setPressed] = useState(false);
  const data = pressed ? booksComments : booksComments.slice(0, 2);
  const renderList = data.map((item: CommentProps) => {
    return <Comment id={item.id} url={item.url} author={item.author} text={item.text} key={item.id} />;
  });
  return (
    <SafeAreaView>
      {renderList}
      <Pressable onPress={() => setPressed(!pressed)}>
        <Text style={styles.button}>{pressed ? 'Hide' : 'View All'}</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default CommentList;
