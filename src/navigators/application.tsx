import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  OnBoarding,
  CreateEcho,
  SignUp,
  CreateProfile,
  AddAccounts,
  SocialMedia,
  EditProfile,
} from '../screens';

const Stack = createNativeStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="CreateEcho" component={CreateEcho} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="AddAccounts" component={AddAccounts} />
        <Stack.Screen name="SocialMedia" component={SocialMedia} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
