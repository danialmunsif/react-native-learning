import {StyleSheet} from 'react-native';
import {Colors} from '../../shared/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  innerContainer: {
    paddingHorizontal: 30,
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backButtonImage: {
    width: 16,
    height: 16,
  },
  heading: {
    color: Colors.PRIMARY,
    marginBottom: 10,
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'OatmealPro-Medium',
  },
  subHeading: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 40,
    fontFamily: 'OatmealPro-Medium',
  },
  socialButton: {
    color: Colors.PRIMARY,
    fontSize: 24,
    fontWeight: '500',
    alignItems: 'center',
    fontFamily: 'OatmealPro-Medium',
    marginBottom: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    height: 48,
    borderRadius: 24,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonActive: {
    backgroundColor: 'rgba(21, 21, 21, 1)',
  },
  nextButtonInactive: {
    backgroundColor: 'rgba(21, 21, 21, 0.5)',
  },
  nextButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'OatmealPro-Medium',
  },
});
