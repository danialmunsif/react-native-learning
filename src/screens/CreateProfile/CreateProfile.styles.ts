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
    width: '100%',
    padding: 30,
  },
  profileWrapper: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: Colors.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },
  placeholderImage: {
    width: 34,
    height: 34,
  },
  heading: {
    fontSize: 32,
    fontWeight: '500',
    marginBottom: 10,
    fontFamily: 'OatmealPro-Medium',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 70,
    fontFamily: 'OatmealPro-Regular',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  input: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.SECONDARY,
    marginBottom: 10,
    width: '100%',
  },
  bioContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  inputBio: {
    padding: 16,
    height: 72,
    borderRadius: 8,
    backgroundColor: Colors.SECONDARY,
    marginBottom: 10,
    width: '100%',
  },
  counter: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
    color: Colors.WARNING,
    fontSize: 12,
    fontFamily: 'OatmealPro-Regular',
  },
  footer: {
    bottom: 50,
    paddingHorizontal: 30,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 128,
    width: '100%',
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'OatmealPro-Medium',
  },
  iconButton: {
    position: 'absolute',
    backgroundColor: Colors.BACKGROUND,
    right: -2,
    bottom: -2,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upArrow: {
    width: 10,
    height: 10,
  },
});
