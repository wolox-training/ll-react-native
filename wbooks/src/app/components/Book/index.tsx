import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import defaultImg from '@assets/defaultBook.png';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export interface BookProps {
  title: string;
  author: string;
  imageUrl?: any;
  id: number;
  year: string;
}

function Book({ title, author, imageUrl, year }: BookProps) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.pressable}
      onPress={() =>
        navigation.navigate('Details', {
          imageUrl,
          title,
          author,
          year
        })
      }>
      <Image style={styles.bookImage} source={imageUrl ? imageUrl : defaultImg} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </Pressable>
  );
}

export default Book;
