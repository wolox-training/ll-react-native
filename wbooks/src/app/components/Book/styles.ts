import { StyleSheet } from 'react-native';
import { black, grey, white } from '@constants/colors';

const styles = StyleSheet.create({
  title: {
    lineHeight: 20,
    textAlign: 'center',
    color: black,
    fontSize: 13
    /* fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700' */
  },
  author: {
    lineHeight: 18,
    textAlign: 'center',
    color: grey,
    fontSize: 12
  },

  bookContainer: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '3%'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '3%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

export default styles;
