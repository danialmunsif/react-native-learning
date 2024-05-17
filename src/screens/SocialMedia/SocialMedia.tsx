import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {MaterialIcon} from '../../components/Icon/Icon';
import ModalBottomSheet from '../../components/Modal/Modal';
import {styles} from './SocialMedia.styles';
import {Images} from '../../shared/Icons';
import {ROUTES} from '../../shared/Routes';
import {socialPlatforms} from '../../shared/constants';
import {updateSocial} from '../../store/auth';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state: any) => state.auth);
  const {name, email, profileImage, socials: socialApps} = user;
  const [socialApp, setSocialApp] = useState(socialApps);

  const [modalVisible, setModalVisible] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSave = (platform: string, username: string) => {
    const newSocial = socialPlatforms.find(
      (social: any) => social.id === platform,
    );
    setSocialApp([...socialApp, {...newSocial, name}]);
    dispatch(updateSocial({socials: [...socialApp, {...newSocial, name}]}));
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.constainerPadding}>
        <View style={styles.containerProfile}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.EDIT_PROFILE as never)}>
            <Image source={{uri: profileImage.uri}} style={styles.profilePic} />
          </TouchableOpacity>
          <View style={styles.textContainerProfile}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <Image source={Images.Setting} style={styles.settingsIcon} />
        </View>
        <ScrollView>
          <View style={styles.grid}>
            {(socialApp || []).map((media: any) => (
              <View key={media.id} style={styles.box}>
                <Image source={media.icon} style={styles.icon} />
                <View style={styles.textContainer}>
                  <Text style={styles.username}>{`@ ${media.name}`}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}>
        <MaterialIcon size="large" color="white" name="plus" />
      </TouchableOpacity>
      <ModalBottomSheet
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
