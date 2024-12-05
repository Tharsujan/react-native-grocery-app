import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './loginScreenStyles';
import {handleLogin} from '../../actions/login';
import {AuthContext} from '../../utils/auth/auth';
import moment from 'moment';
import Toast from 'react-native-toast-message';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {login} = useContext(AuthContext);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const handleLoginClick = async () => {
    try {
      const response = await handleLogin(email, password);
      console.log('API Login successful:', response);

      const isLoginSuccess = await login(response);

      if (isLoginSuccess) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful!',
          position: 'Bottom',
        });

        setTimeout(() => {
          // navigation.navigate('Home'); // Replace 'Home' with your actual home screen name
        }, 2000);
      }
    } catch (error) {
      console.error('Login Error:', error);

      // Show error toast with a message
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: error.message || 'An error occurred during login',
        position: 'bottom',
      });
    }
  };

  return (
    <View style={styles.safeareaView}>
      <ImageBackground
        source={require('../../assests/backgroundmask.png')} // Use the correct path to the background image file
        style={styles.background}
        resizeMode="cover" // Optional: Adjust based on your design
        blurRadius={10}>
        <View style={styles.container}>
          {/* Carrot icon */}
          <Image
            source={require('../../assests/header.png')}
            style={styles.logo}
          />

          {/* Title */}
          <Text style={styles.title}>Loging</Text>
          <Text style={styles.subtitle}>Enter your emails and password</Text>

          {/* Email input */}
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Password input with toggle visibility */}
          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color="#7C7C7C"
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLoginClick}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          {/* Signup Link */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
