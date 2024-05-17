import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {MaterialIcon} from '../../components/Icon/Icon';
import {styles} from './EditProfile.styles';
import {Colors} from '../../shared/Colors';
import {logout, updateProfile} from '../../store/auth';
import {ROUTES} from '../../shared/Routes';

type imageUri = {
  uri: string | undefined;
};

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    name: userName,
    bio: userBio,
    profileImage,
  } = useSelector((state: any) => state.auth);
  const [name, setName] = useState(userName);
  const [bio, setBio] = useState(userBio);
  const [imageUri, setImageUri] = useState<imageUri>(profileImage);

  const handlePressAvatar = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    Alert.alert(
      'Upload Profile Picture',
      '',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Take Photo',
          onPress: () =>
            launchCamera({...options, mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else {
                const source = {
                  uri: response.assets ? response.assets[0].uri : '',
                };
                setImageUri(source);
              }
            }),
        },
        {
          text: 'Photo Library',
          onPress: () =>
            launchImageLibrary({...options, mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else {
                const source = {
                  uri: response.assets ? response.assets[0].uri : '',
                };
                setImageUri(source);
              }
            }),
        },
      ],
      {cancelable: true},
    );
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigation.navigate(ROUTES.ONBOARDING as never);
  };

  const handleSave = () => {
    dispatch(updateProfile({name, bio, profileImage: imageUri}));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.innerContainer}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={handleSave}>
            <MaterialIcon
              name="chevron-left"
              size="extraLarge"
              color={Colors.PRIMARY}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.centered}>
          <View style={styles.profileWrapper}>
            <Image source={{uri: imageUri.uri}} style={styles.profileImage} />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handlePressAvatar}>
              <MaterialIcon
                name="pencil-outline"
                size="medium"
                color={Colors.PRIMARY}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fieldMargin}>
          <Text style={styles.heading}>Username</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View style={styles.fieldMargin}>
          <Text style={styles.heading}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View style={styles.fieldMargin}>
          <Text style={styles.heading}>Bio</Text>
          <View style={styles.column}>
            <TextInput
              style={styles.inputBio}
              placeholder="Bio"
              value={bio}
              onChangeText={setBio}
              maxLength={30}
              multiline={true}
              textAlignVertical="top"
            />
            <Text style={styles.counter}>{`${bio.length}/30`}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
        <MaterialIcon name="logout" size="large" color={Colors.ERROR} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;
