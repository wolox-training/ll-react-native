import { StyleSheet } from 'react-native';
import { gray, white, pictonBlue, WildSand } from '@constants/colors';

const styles = StyleSheet.create({
  book: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: white,
    marginTop: 94,
    marginHorizontal: 24,
    marginBottom: 308,
    elevation: 2,
    shadowOffset: {
      height: 0.5,
      width: 4
    },
    shadowOpacity: 1,
    shadowColor: gray,
    borderRadius: 7
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
    marginRight: 29
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
    marginBottom: 10,
    marginHorizontal: 25,
    borderRadius: 27,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: pictonBlue
  },

  buttonText1: {
    color: pictonBlue,
    textAlign: 'center',
    marginVertical: 12,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.333333
  },
  button2: {
    width: 277,
    height: 46,
    borderRadius: 27
  },

  linearGradient: {
    borderRadius: 27,
    marginBottom: 18
  },

  buttonText2: {
    color: white,
    textAlign: 'center',
    marginVertical: 14,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.333333
  }
});

export default styles;
