// src/screens/WelcomeScreen.js
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './welcomeScreenStyles';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assests/welcomeBackground.png')} // Background image of the delivery person
      style={styles.background}>
      <View style={styles.overlay}>
        {/* Carrot Icon */}
        <Image
          source={require('../../assests/carrot_white.png')}
          style={styles.icon}
        />

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.welcomeSubText}>to our store</Text>
        <Text style={styles.subText}>
          Get your groceries in as fast as one hour
        </Text>

        {/* Get Started Button */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('LoginScreen')} // or your next screen
          >
            <Text style={styles.getStartedButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
