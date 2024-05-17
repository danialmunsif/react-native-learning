import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './OnBoarding.styles';
const logo = require('../../../assets/images/spatialLogo.png');
import {ROUTES} from '../../shared/Routes';

const OnboardingScreens = () => {
  const navigation = useNavigation();
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  const handleNavigation = () => {
    if (isAuthenticated) {
      navigation.navigate(ROUTES.SOCIAL_MEDIA as never);
    } else {
      navigation.navigate(ROUTES.CREATE_ECHO as never);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.heading}>Welcome!</Text>
        <Text style={styles.subHeading}>Congrats on your new Circle</Text>
        <View>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={handleNavigation}>
            <Text style={styles.btnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreens;
