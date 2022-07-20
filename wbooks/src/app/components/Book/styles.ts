import { StyleSheet } from 'react-native';
import { tundora, gray, white } from '@constants/colors';

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: 24,
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: white,
    paddingVertical: 15,
    marginVertical: 5,
    elevation: 2,
    shadowOffset: {
      height: 0.5,
      width: 4
    },
    shadowOpacity: 1,
    shadowColor: gray,
    borderRadius: 7
  },
  title: {
    color: tundora,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    marginBottom: 3
  },
  author: {
    color: gray,
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400'
  },

  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 5,
    marginRight: 25
  },

  bookImage: {
    height: 70,
    width: 48,
    marginRight: 13,
    marginLeft: 25,
    alignSelf: 'center'
  }
});

export default styles;
