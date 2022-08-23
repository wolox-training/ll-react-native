import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '85%'
  },
  inputStyle: {
    flex: 1,
    backgroundColor: white,
    borderRadius: 100,
    paddingLeft: '12%'
  },
  searchIcon: {
    width: 20,
    height: 20
  },
  clearIcon: {
    width: 20,
    height: 20
  }
});

export default styles;
