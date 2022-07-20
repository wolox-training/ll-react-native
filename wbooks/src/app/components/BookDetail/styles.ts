import { StyleSheet } from 'react-native';
import { gray, white } from '@constants/colors';

const styles = StyleSheet.create({
  book: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 265,
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
  buttonContainer: {
    flex: 1,
    flexWrap: 'wrap',
    width: 277,
    height: 46,
    backgroundColor: 'red',
    alignItems: 'flex-end'
  },
  button1: {}
});

export default styles;
