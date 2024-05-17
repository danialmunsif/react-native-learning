import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  atSign: {
    fontSize: 16,
    color: Colors.Black,
    marginRight: 5,
  },
  inputText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'OatmealPro-Medium',
    color: Colors.PRIMARY,
  },
  greenTick: {
    height: 16,
    width: 16,
    marginRight: 20,
  },
  cross: {
    height: 8,
    width: 8,
    marginRight: 10,
  },
});
