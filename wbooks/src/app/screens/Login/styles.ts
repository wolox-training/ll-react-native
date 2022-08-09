import { pictonBlue, white, red } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 36
  },

  mainLogoImage: {
    marginBottom: 51,
    marginTop: '30%'
  },

  inputsContainer: {
    width: '100%'
  },

  inputStyle: {
    marginBottom: 20,
    borderWidth: 0.1,
    backgroundColor: white,
    height: 52
  },

  button: {
    height: 46,
    width: '100%',
    borderRadius: 27,
    backgroundColor: white
  },

  buttonText: {
    color: pictonBlue,
    textAlign: 'center',
    marginVertical: 14,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.333333
  },

  dangerText: {
    marginTop: '5%',
    color: red,
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default styles;
