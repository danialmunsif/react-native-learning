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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    color: Colors.PRIMARY,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 500,
    fontFamily: 'OatmealPro-Medium',
  },
  subHeading: {
    color: Colors.PRIMARY,
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 20,
    fontFamily: 'OatmealPro-Regular',
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  input: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: Colors.SECONDARY,
    marginBottom: 4,
  },
  counter: {
    alignSelf: 'flex-end',
    color: Colors.WARNING,
    fontSize: 12,
    fontWeight: 400,
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
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'OatmealPro-Medium',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 8,
  },
  image: {height: 16, width: 16, position: 'absolute', right: 10},
  backArrow: {width: 24, height: 24},
  mainImage: {alignItems: 'center'},
  textContainer: {padding: 30},
  btnContainer: {bottom: 50, paddingHorizontal: 30},
});
