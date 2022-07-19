import React from 'react';
import { View, Image, Text } from 'react-native';
import defaultImg from '@assets/defaultBook.png';

import styles from './styles';

export interface BookProps {
  imageUrl?: any;
  title: string;
  author: string;
  year: string;
}

function DetailsBook({ imageUrl, title, author, year }: BookProps) {
  return (
    <View style={styles.book}>
      <Image style={styles.bookImage} source={imageUrl ? imageUrl : defaultImg} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
    </View>
  );
}

export default DetailsBook;
