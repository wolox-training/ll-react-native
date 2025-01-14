import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import defaultImg from '@assets/defaultBook.png';
import { useNavigation } from '@react-navigation/native';
import { BookProps } from '@interfaces/BookProps';

import styles from './styles';

function Book({ title, author, imageUrl, year }: BookProps) {
  const navigation = useNavigation();
  const handleNavegation = () =>
    navigation.navigate('Details', {
      imageUrl,
      title,
      author,
      year
    });

  return (
    <Pressable style={styles.pressable} onPress={handleNavegation}>
      <Image style={styles.bookImage} source={imageUrl ? imageUrl : defaultImg} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </Pressable>
  );
}

export default Book;
