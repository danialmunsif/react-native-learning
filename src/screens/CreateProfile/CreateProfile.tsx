import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

import {styles} from './CreateProfile.styles';
import {ROUTES} from '../../shared/Routes';
import {Images} from '../../shared/Icons';
import {updateProfile} from '../../store/auth';

type imageUri = {
  uri: string | undefined;
};

const CreateProfile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [imageUri, setImageUri] = useState<imageUri>({uri: ''});
  const isFormComplete = imageUri && name.trim() !== '' && bio.trim() !== '';

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
              console.log('Response = ', response);
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
              console.log('Response = ', response);
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

  const handleNext = () => {
    dispatch(updateProfile({name, bio, profileImage: imageUri}));
    navigation.navigate(ROUTES.ADD_ACCOUNTS as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.heading}>Create Your Profile</Text>
        <Text style={styles.subHeading}>First, let’s create your profile.</Text>
        <View style={styles.profileWrapper}>
          <Image
            source={imageUri || Images.PlaceHolder}
            style={imageUri ? styles.profileImage : styles.placeholderImage}
          />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={handlePressAvatar}>
            <Image source={Images.UpArrow} style={styles.upArrow} />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <View style={styles.bioContainer}>
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
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            isFormComplete
              ? // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: '#151515', opacity: 1}
              : // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: '#151515', opacity: 0.5},
          ]}
          onPress={handleNext}
          disabled={!isFormComplete}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateProfile;
