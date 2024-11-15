import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import OrderFailedModal from '../../components/orderFailedModel';

const {width, height} = Dimensions.get('window');
const OrderAcceptedScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleRetry = () => {
    setModalVisible(false);
    // Add retry logic here
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assests/backgroundmask.png')}
        style={styles.background}
        resizeMode="cover"
        blurRadius={10}>
        <View style={styles.subContainer}>
          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assests/orderSuccess.png')}
              style={styles.icon}
            />
          </View>

          {/* Message */}
          <Text style={styles.title}>Your Order has been accepted</Text>
          <Text style={styles.subtitle}>
            Your items has been placcd and is on it’s way to being processed
          </Text>

          {/* Buttons */}
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={styles.trackButton}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.trackButtonText}>Track Order</Text>
            </TouchableOpacity>
          </View>
          <OrderFailedModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            onRetry={handleRetry}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backToHomeText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OrderAcceptedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  subContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    borderRadius: 100,
    padding: 20,
    marginBottom: 60,
  },
  icon: {
    width: 250,
    height: 220,
    marginRight: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 50,
    fontFamily: 'Gilroy',
    marginBottom: 22,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    fontFamily: 'Gilroy-Medium',
    textAlign: 'center',
    marginBottom: 140,
    paddingHorizontal: 20,
  },
  trackButton: {
    backgroundColor: '#53B175',
    width: width * 0.9,
    height: 67,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 19,
    alignItems: 'center',
    marginVertical: 10,
  },
  trackButtonText: {
    color: '#FFF9FF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  backToHomeText: {
    color: '#181725',
    fontSize: 18,
    fontFamily: 'Gilroy',
    fontWeight: '600',
    marginTop: 25,
  },
});
