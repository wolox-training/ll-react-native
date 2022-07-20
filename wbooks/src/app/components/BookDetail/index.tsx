import React from 'react';
import { View, Image, Text } from 'react-native';
import defaultImg from '@assets/defaultBook.png';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

export interface RouteParams {
  title: string;
  author: string;
  imageUrl?: any;
  year: string;
}

function BookDetail() {
  const route = useRoute();
  const { title, author, imageUrl, year }: RouteParams = route.params;
  return (
    <View style={styles.book}>
      <View style={styles.infoContainer}>
        <Image style={styles.bookImage} source={imageUrl ? imageUrl : defaultImg} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>
      <View style={styles.button1} />
      <View style={styles.button2} />
    </View>
  );
}

export default BookDetail;
