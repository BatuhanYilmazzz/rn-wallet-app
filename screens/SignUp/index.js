import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants';

import Form from '../../components/SignUp/Form';
import Header from '../../components/SignUp/Header';
import Logo from '../../components/SignUp/Logo';

const SignUpScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          <Header />
          <Logo />
          <Form />
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
