import { StyleSheet } from 'react-native';
import { white, WildSand, gray } from '@constants/colors';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: WildSand
  },
  commentsContainer: {
    alignSelf: 'stretch',
    backgroundColor: white,
    elevation: 2,
    shadowOffset: {
      height: 1,
      width: 4
    },
    shadowOpacity: 1,
    shadowColor: gray,
    borderRadius: 7,
    marginHorizontal: 24
  }
});

export default styles;
