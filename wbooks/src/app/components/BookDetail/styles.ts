import { StyleSheet, Dimensions } from 'react-native';
import { gray, white, pictonBlue } from '@constants/colors';

const screen = Dimensions.get('screen');
const DEVICE_HEIGHT = Math.max(screen.width, screen.height);

const isSmall = DEVICE_HEIGHT < 534;

const styles = StyleSheet.create({
  book: {
    alignItems: 'center',
    backgroundColor: white,
    marginTop: isSmall ? 60 : 94,
    marginHorizontal: 24,
    marginBottom: 20,
    elevation: 2,
    shadowOffset: {
      height: 0.5,
      width: 4
    },
    shadowOpacity: 1,
    shadowColor: gray,
    borderRadius: 7,
    paddingHorizontal: 25
  },
  bookImage: {
    height: 104,
    width: 66,
    marginTop: 15
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
    marginLeft: 12
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 2
  },
  authorANDyear: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center'
  },
  button1: {
    marginTop: 26,
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: pictonBlue
  },

  button: {
    alignSelf: 'stretch',
    height: 46,
    borderRadius: 27
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
  linearGradient: {
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
