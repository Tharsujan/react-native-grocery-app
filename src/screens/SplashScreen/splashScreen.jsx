import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './splashScreenStyles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    console.log('Navigation State:', navigation.getState());
    setTimeout(() => {
      navigation.navigate('WelcomeScreen'); // Replace with your intended screen
    }, 3000); // Adjust the delay as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Carrot Icon */}
      <Image
        source={require('../../assests/carrot_white.png')}
        style={styles.icon}
      />

      {/* App Name */}
      <View style={styles.textContainer}>
        <Image
          source={require('../../assests/appnameImage.png')}
          style={styles.image}
        />
        <Text style={styles.tagline}>online groceriet</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
