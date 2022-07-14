import React from 'react';
import { View, Text, Image } from 'react-native';
import book1 from '@assets/book1/Cover.png';

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
      <Image style={styles.bookImage} source={imageUrl ? imageUrl : book1} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
