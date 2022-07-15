import React from 'react';
import { View, Text, Image } from 'react-native';
import defaultImg from '@assets/defaultBook.png';

import styles from './styles';

export interface BookProps {
  title: string;
  author: string;
  imageUrl?: any;
  id: number;
}

function Book({ title, author, imageUrl }: BookProps) {
  return (
    <View style={styles.book}>
      <Image style={styles.bookImage} source={imageUrl ? imageUrl : defaultImg} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
