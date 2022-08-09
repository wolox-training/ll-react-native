import React from 'react';
import Background from '@assets/BackgroundLoginScreen/Background.png';
import mainLogo from '@assets/mainLogo/mainLogo.png';
import { View, Image, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function Login() {
  const navigation = useNavigation();
  const homeNavegation = () => navigation.navigate('Library');
  return (
    <ImageBackground source={Background} style={styles.container}>
      <Image style={styles.mainLogoImage} source={mainLogo} />
      <View style={styles.inputsContainer}>
        <TextInput style={styles.userNameInput} placeholder="Username" />
        <TextInput style={styles.userNameInput} placeholder="Password" />
      </View>
      <Pressable style={styles.button} onPress={homeNavegation}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Pressable>
    </ImageBackground>
  );
}

export default Login;
