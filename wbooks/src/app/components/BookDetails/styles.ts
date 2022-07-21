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
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    marginBottom: 3
  },
  author: {},
  year: {}
});

export default styles;
