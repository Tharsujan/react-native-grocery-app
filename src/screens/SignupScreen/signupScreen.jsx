// src/screens/SignupScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Toast from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './signupScreenstyles';
import {handleSignup} from '../../actions/register';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle email change and update validity
  const handleEmailChange = input => {
    setEmail(input);
    setIsEmailValid(validateEmail(input)); // set validity based on regex check
  };
  const handleSignUpClick = async () => {
    try {
      const response = await handleSignup(username, email, password);
      //console.log('Signup successful:', response);
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Signup successful!',
        text2: 'You can now log in.',
      });
      navigation.navigate('LoginScreen'); // Redirect to login screen after successful signup
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error (e.g., show a message to the user)
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Signup failed',
        text2: error.message || 'Please try again.',
      });
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assests/backgroundmask.png')} // Use the correct path to the background image file
        style={styles.background}
        resizeMode="cover" // Optional: Adjust based on your design
        blurRadius={10}>
        <View style={styles.subContainer}>
          {/* Carrot icon */}
          <Image
            source={require('../../assests/header.png')}
            style={styles.logo}
          />

          {/* Title */}
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>
            Enter your credentials to continue
          </Text>

          {/* Username input */}
          <Text style={styles.inputTitle}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={username}
            onChangeText={setUsername}
          />

          {/* Email input */}
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            {isEmailValid !== null && (
              <Icon
                name={isEmailValid ? 'checkmark' : 'close'}
                size={20}
                color={isEmailValid ? '#53B175' : 'red'}
                style={styles.validationIcon}
              />
            )}
          </View>

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

          {/* Terms and Privacy Policy */}
          <Text style={styles.termsText}>
            By continuing you agree to our{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>.
          </Text>

          {/* Signup Button */}
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignUpClick}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Login Link */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignupScreen;
