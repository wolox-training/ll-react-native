import React from 'react';
import { View, Image } from 'react-native';
import searchBackground from '@assets/searchBackground/Search_results_empty.png';

import styles from './styles';

function SearchScreen() {
  return (
    <View style={styles.searchBackground}>
      <Image source={searchBackground} style={styles.searchBackgroundImg} />
    </View>
  );
}

export default SearchScreen;
