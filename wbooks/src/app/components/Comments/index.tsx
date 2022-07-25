import React from 'react';
import { View, Text, Image } from 'react-native';
import defaultImg from '@assets/defaultBook.png';
import { CommentProps } from '@interfaces/CommentProps';

import styles from './styles';

function comment({ author, text }: CommentProps) {
  return (
    <View style={styles.comment}>
      <View style={styles.textCommentContainer} />
      {/* <Image style={styles.commentImage} source={imageUrl ? imageUrl : defaultImg} /> */}
    </View>
  );
}
export default comment;
