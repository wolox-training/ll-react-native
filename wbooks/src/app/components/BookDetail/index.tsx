import React from 'react';
import { View, Image, Text } from 'react-native';
import defaultImg from '@assets/defaultBook.png';
import { useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { EasternBlue, pictonBlue, Turquoise } from '@constants/colors';
import { BookProps } from '@interfaces/BookProps';

import styles from './styles';

function BookDetail() {
  const route = useRoute();
  const { title, author, imageUrl, year }: BookProps = route.params;
  return (
    <View style={styles.book}>
      <View style={styles.infoContainer}>
        <Image style={styles.bookImage} source={imageUrl ? imageUrl : defaultImg} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.authorANDyear}>{author}</Text>
          <Text style={styles.authorANDyear}>{year}</Text>
        </View>
      </View>
      <View style={[styles.button1, styles.button]}>
        <Text style={styles.buttonText1}>ADD TO WISHLIST</Text>
      </View>
      <LinearGradient
        colors={[EasternBlue, pictonBlue, Turquoise]}
        style={[styles.linearGradient, styles.button]}>
        <View style={styles.button}>
          <Text style={styles.buttonText2}>RENT</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default BookDetail;
