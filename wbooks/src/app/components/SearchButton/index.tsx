import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import searchIccon from '@assets/searchBar/ic_search.png';

import styles from './styles';

function SearchButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
      <Image source={searchIccon} style={styles.searchButtonImg} />
    </TouchableOpacity>
  );
}

export default SearchButton;