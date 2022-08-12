import React from 'react';
import { View, Image, Text, TextInput, Pressable, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { actionCreators } from '@redux/login/actions';
import { loginInfo } from '@interfaces/loginInfo';
import Background from '@assets/BackgroundLoginScreen/Background.png';
import mainLogo from '@assets/mainLogo/mainLogo.png';

import styles from './styles';

const isValidEmail = (email: string) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);

    return isValid;
  };

  const navigation = useNavigation();
  const homeNavegation = () => navigation.navigate('Library');

  const dispatch = useDispatch();

  const onSubmit = (data: loginInfo) => {
    dispatch(actionCreators.login(data, homeNavegation));
  };

  return (
    <ImageBackground source={Background} style={styles.container}>
      <Image style={styles.mainLogoImage} source={mainLogo} />
      <View style={styles.inputsContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            validate: handleEmailValidation
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyle}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
            />
          )}
          name="email"
        />
        {errors.email ? (
          <Text style={styles.dangerText}>
            {errors.email.type === 'required'
              ? 'The email field cannot be empty.'
              : 'Please, enter a valid email.'}
          </Text>
        ) : null}
        <Controller
          control={control}
          rules={{
            minLength: 8,
            maxLength: 16,
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.inputStyle}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password?.type === 'minLength' ? (
          <Text style={styles.dangerText}>The password is too short.</Text>
        ) : errors.password ? (
          <Text style={styles.dangerText}>The password field cannot be empty.</Text>
        ) : (
          false
        )}
      </View>
      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Pressable>
    </ImageBackground>
  );
}

export default Login;
