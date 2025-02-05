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
import {useRegisterMutation} from '../../seivices/api/authApi';

const SignupScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(null);

  const [register, {isLoading}] = useRegisterMutation();
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
    if (!username || !email || !password) {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        position: 'center',
        text1: 'All fields are required',
        text2: 'Please fill in all fields.',
      });
      return;
    }

    if (!isEmailValid) {
      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        position: 'center',
        text1: 'Invalid email',
        text2: 'Please enter a valid email address.',
      });
      return;
    }

    try {
      const response = await register({
        username,
        email,
        password,
      }).unwrap();

      Toast.show({
        type: 'success',
        visibilityTime: 3000,
        position: 'center',
        text1: 'Signup successful!',
        text2: 'You can now log in.',
      });

      navigation.navigate('LoginScreen');
    } catch (error) {
      //console.error('Error during signup:', error);

      Toast.show({
        type: 'error',
        visibilityTime: 3000,
        position: 'center',
        text1: 'Signup failed',
        text2: error?.data || 'Please try again.',
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
