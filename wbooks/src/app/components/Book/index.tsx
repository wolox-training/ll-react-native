import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function Book({ title, author, imageUrl }: { title?: string; author?: string; imageUrl?: any }) {
  return (
    <View style={styles.book}>
      <Image style={styles.bookImage} source={imageUrl} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default Book;
