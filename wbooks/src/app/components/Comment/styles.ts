import { StyleSheet } from 'react-native';
import { gray, black, Alto, white } from '@constants/colors';

const IMAGE_SIZE = 50;

const styles = StyleSheet.create({
  comment: {
    alignSelf: 'stretch',
    flexDirection: 'column'
  },

  line: {
    width: '90%',
    height: 1,
    backgroundColor: Alto,
    marginTop: 15
  },

  infoContainer: {
    flexDirection: 'row'
  },

  textCommentContainer: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    marginTop: 15,
    marginRight: 25
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
