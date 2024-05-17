import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  containerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    width: '46%',
    height: 151,
    backgroundColor: '#E6E6E6',
    borderRadius: 24,
    marginBottom: 20,
    padding: 15,
    alignItems: 'flex-start',
  },
  icon: {
    width: 40,
    height: 40,
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  textContainerProfile: {
    flex: 1,
    marginLeft: 20,
  },
  username: {
    fontSize: 16,
    color: '#151515',
    textAlign: 'center',
  },
  profilePic: {
    width: 64,
    height: 64,
    borderRadius: 177,
  },
  name: {
    color: '#151515',
    fontSize: 16,
    fontWeight: 500,
    fontFamily: 'OatmealPro-Medium',
  },
  email: {
    color: '#8B8B8B',
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'OatmealPro-Regular',
  },
  settingsIcon: {
    width: 32,
    height: 32,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    width: 100,
    height: 48,
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#12CC50',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  constainerPadding: {padding: 20},
});
