import { StyleSheet } from 'react-native';
import { gray, black, Alto } from '@constants/colors';

const IMAGE_SIZE = 50;

const styles = StyleSheet.create({
  comment: {
    alignSelf: 'center',
    flexDirection: 'column',
    width: '93%',
    marginHorizontal: 24
  },

  line: {
    width: '90%',
    height: 1,
    backgroundColor: Alto,
    marginTop: '11%'
  },

  infoContainer: {
    flexDirection: 'row'
  },

  textCommentContainer: {
    flex: 1,
    flexDirection: 'column',
    height: 120,
    marginTop: 15,
    marginRight: 26
  },

  commentImage: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    marginLeft: 25,
    marginRight: 13,
    marginTop: 15,
    borderRadius: 25
  },

  author: {
    fontSize: 16,
    lineHeight: 19,
    color: black,
    marginBottom: 6
  },

  text: {
    fontSize: 15,
    lineHeight: 18,
    color: gray
  }
});

export default styles;
