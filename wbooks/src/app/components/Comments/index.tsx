import React from 'react';
import { View, Text, Image } from 'react-native';
import defaultImg from '@assets/defaultBook.png';
import { CommentProps } from '@interfaces/CommentProps';

import styles from './styles';

function comment({ author, text, url }: CommentProps) {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.comment}>
        <View style={styles.infoContainer}>
          <Image style={styles.commentImage} source={url ? url : defaultImg} />
          <View style={styles.textCommentContainer}>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
          </View>
        </View>
      </View>
    </View>
  );
}
export default comment;
