import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 24,
    bottom: 50,
  },
  heading: {
    fontSize: 32,
    fontWeight: 500,
    marginBottom: 10,
    fontFamily: 'OatmealPro-Medium',
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 20,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 128,
    width: '100%',
    height: 48,
    backgroundColor: Colors.Blue,
  },
  btnText: {
    color: Colors.WHITE,
    alignItems: 'center',
    fontSize: 16,
    fontFamily: 'OatmealPro-Medium',
  },
});
