import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';

import {styles} from './CreateEcho.styles';
const logo = require('../../../assets/images/spatialLogo.png');
const GreenTick = require('../../../assets/images/GreenTick.png');
const BackArrow = require('../../../assets/images/BackArrow.png');

const CreateEchoScreen = () => {
  const navigation = useNavigation();
  const [echoName, setEchoName] = useState('');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={BackArrow} style={styles.backArrow} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <View style={styles.mainImage}>
          <Image source={logo} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Create your echo</Text>
          <Text style={styles.subHeading}>
            Your echo is your unique identifier for sharing your Circle
            experiences.
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="your-echo"
                value={echoName}
                onChangeText={setEchoName}
                maxLength={20}
              />
              {echoName.length >= 3 && (
                <Image source={GreenTick} style={styles.image} />
              )}
            </View>
            <Text style={styles.counter}>{`${echoName.length}/20`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            echoName.length >= 3
              ? // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: '#151515', opacity: 1}
              : // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: '#151515', opacity: 0.5},
          ]}
          onPress={() => navigation.navigate('SignUp' as never)}
          disabled={echoName.length < 3}>
          <Text style={styles.buttonText}>Claim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateEchoScreen;
