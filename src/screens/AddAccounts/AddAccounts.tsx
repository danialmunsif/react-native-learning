import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import SocialInput from '../../components/SocialInput/SocialInput';
import {Icons} from '../../shared/Icons';
import {socialPlatforms} from '../../shared/constants';
import {styles} from './AddAccount.styles';
import {ROUTES} from '../../shared/Routes';
import {updateSocial} from '../../store/auth';

type socialApp = {
  id: string;
  icon: any;
  name: string;
};

const AddAccountsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.name);
  const [socialApps, setSocialApps] = useState<socialApp[]>([]);

  const isAnyFieldFilled = socialApps.length > 0;

  const handleNext = () => {
    navigation.navigate(ROUTES.SOCIAL_MEDIA as never);
    dispatch(updateSocial({socials: socialApps}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image source={Icons.BackArrow} style={styles.backButtonImage} />
        </TouchableOpacity>
        <Text style={styles.heading}>{`Welcome ${user}`} </Text>
        <Text style={styles.subHeading}>
          Now, let’s add your account handles to your Circle.
        </Text>
        <View>
          <Text style={styles.socialButton}>Social</Text>
        </View>
        <ScrollView>
          {socialPlatforms.map((platform: any) => (
            <SocialInput
              key={platform.id}
              icon={platform.icon}
              initialValue={user}
              setSocialApps={setSocialApps}
              platform={platform}
              socialApps={socialApps}
            />
          ))}
        </ScrollView>
        <TouchableOpacity
          style={[
            styles.nextButton,
            isAnyFieldFilled
              ? styles.nextButtonActive
              : styles.nextButtonInactive,
          ]}
          onPress={handleNext}
          disabled={!isAnyFieldFilled}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddAccountsScreen;
