import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

function Book({ title, autor, image }: { title: string; autor: string; image?: any }) {
  return (
    <View style={styles.title}>
      <Image source={image} />
    </View>
  );
}

export default Book;
