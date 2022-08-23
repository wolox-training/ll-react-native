import React from 'react';
import { TextInput, Image, View } from 'react-native';
import searchIcon from '@assets/searchIcon/ic_search.png';
import clearIcon from '@assets/clearIcon/Clear.png';

import styles from './SearchBar';

function SearchBar() {
  return (
    <View style={styles.container}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <TextInput style={styles.inputStyle} placeholder="Search" />
      <Image source={clearIcon} style={styles.clearIcon} />
      <TextInput />
    </View>
  );
}

export default SearchBar;
