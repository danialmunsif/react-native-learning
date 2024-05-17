import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  backButton: {
    position: 'absolute',
    top: 64,
    left: 24,
    backgroundColor: Colors.SECONDARY,
    padding: 12,
    borderRadius: 100,
    zIndex: 1,
  },
  image: {
    height: 16,
    width: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  heading: {
    fontSize: 32,
    fontWeight: 500,
    marginBottom: 10,
    fontFamily: 'OatmealPro-Medium',
    color: Colors.PRIMARY,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 20,
    fontFamily: 'OatmealPro-Medium',
    color: Colors.PRIMARY,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.SECONDARY,
    marginBottom: 15,
    fontFamily: 'OatmealPro-Regular',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 128,
    width: '100%',
    height: 48,
    backgroundColor: 'red',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'OatmealPro-Medium',
  },
});
