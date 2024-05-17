import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

const BackArrow = require('../../../assets/images/BackArrow.png');
import {styles} from './SignUp.styles';
import {ROUTES} from '../../shared/Routes';
import {createAccount} from '../../store/auth';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validateEmail = (emailCheck: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailCheck);
  };

  const isPasswordValid = (passwordCheck: string) => {
    return passwordCheck.length >= 8;
  };

  const createAccounts = () => {
    navigation.navigate(ROUTES.CREATE_PROFILE as never);
    dispatch(createAccount({email}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={BackArrow} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.heading}>Echo Secured!</Text>
        <Text style={styles.subHeading}>
          Now, let’s create your Spatial iD to begin editing your Circle.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={[
            styles.button,
            !(validateEmail(email) && isPasswordValid(password))
              ? // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: '#151515', opacity: 0.5}
              : // eslint-disable-next-line react-native/no-inline-styles
                {backgroundColor: '#151515', opacity: 1},
          ]}
          onPress={createAccounts}
          disabled={!(validateEmail(email) && isPasswordValid(password))}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
