import { StyleSheet } from 'react-native';
import { titleColor, authorColor, white } from '@constants/colors';

const styles = StyleSheet.create({
  title: {
    left: '115%',
    lineHeight: 20,
    textAlign: 'center',
    color: titleColor,
    fontSize: 13
  },
  author: {
    right: '350%',
    top: 20,
    lineHeight: 18,
    textAlign: 'center',
    color: authorColor,
    fontSize: 12
  },

  bookContainer: {
    display: 'flex',
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 45,
    marginLeft: 18
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: -70
  }
});

export default styles;
