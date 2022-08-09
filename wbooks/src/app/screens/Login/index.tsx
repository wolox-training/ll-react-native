import React, { useState } from 'react';
import { View, Image, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '@assets/BackgroundLoginScreen/Background.png';
import mainLogo from '@assets/mainLogo/mainLogo.png';

import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const emailValidation = val => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.length === 0) {
      setEmailValidError('The email field cannot be empty.');
    } else if (reg.test(val) === false) {
      setEmailValidError('Please, enter a valid email.');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const [password, setPassword] = useState('');
  const [passwordValidError, setPasswordValidError] = useState('');

  const passwordValidation = val => {
    if (val.length === 0) {
      setPasswordValidError('The password field cannot be empty.');
    } else if (val.length < 8) {
      setPasswordValidError('The password must be 8 characters.');
      /* } else (val.length === 0 && < 8) // How can make this comparison?{
      setEmailValidError('');  // */
    }
  };

  const navigation = useNavigation();
  const homeNavegation = () => navigation.navigate('Library');
  return (
    <ImageBackground source={Background} style={styles.container}>
      <Image style={styles.mainLogoImage} source={mainLogo} />
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Username"
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => {
            setEmail(value);
            emailValidation(value);
          }}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={password}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => {
            setPassword(value);
            passwordValidation(value);
          }}
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>SIGN IN</Text>
        {emailValidError ? <Text style={styles.dangerText}>{emailValidError}</Text> : null}
        {passwordValidError ? <Text style={styles.dangerText}>{passwordValidError}</Text> : null}
      </Pressable>
    </ImageBackground>
  );
}

export default Login;
