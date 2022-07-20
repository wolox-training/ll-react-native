import { StyleSheet } from 'react-native';
import { gray, white } from '@constants/colors';

const styles = StyleSheet.create({
  book: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 94,
    marginHorizontal: 24,
    marginBottom: 308,
    backgroundColor: gray
  },
  bookImage: {
    height: 104,
    width: 66,
    marginTop: 15,
    marginLeft: 25
  },

  infoContainer: {
    flexDirection: 'row'
  },

  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 12,
    marginRight: 29,
    backgroundColor: white
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 2
  },
  author: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center'
  },
  year: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center'
  },
  button1: {
    width: 277,
    height: 46,
    marginTop: 26,
    marginHorizontal: 25,
    backgroundColor: 'red'
  },
  button2: {
    width: 277,
    height: 46,
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: 'green'
  }
});

export default styles;
