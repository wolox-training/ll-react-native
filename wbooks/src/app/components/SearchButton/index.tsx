import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import searchIccon from '@assets/searchBar/ic_search.png';

import styles from './styles';

function SearchButton() {
  const navigation = useNavigation();
  const searchNavigation = () => navigation.navigate('SearchScreen');
  return (
    <TouchableOpacity style={styles.searchButton} onPress={searchNavigation}>
      <Image source={searchIccon} style={styles.searchButtonImg} />
    </TouchableOpacity>
  );
}

export default SearchButton;
