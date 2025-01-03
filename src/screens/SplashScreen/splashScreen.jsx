import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './splashScreenStyles';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('WelcomeScreen'); // Changed from replace to navigate
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer
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
