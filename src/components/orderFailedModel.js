import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {width, height} = Dimensions.get('window');

const OrderFailedModal = ({visible, onClose, onRetry}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={30} color="#181725" />
          </TouchableOpacity>
          <Image
            source={require('../assests/orderFailed.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Oops! Order Failed</Text>
          <Text style={styles.subtitle}>Something went terribly wrong.</Text>
          <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
            <Text style={styles.retryButtonText}>Please Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.homeButton} onPress={onClose}>
            <Text style={styles.homeButtonText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    height: 600,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-start',
  },
  image: {
    width: 220,
    height: 220,
    marginVertical: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    fontFamily: 'Gilroy',
    color: '#181725',
    textAlign: 'center',
    marginBottom: 15,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
    marginBottom: 50,
    fontFamily: 'Gilroy-Medium',
  },
  retryButton: {
    backgroundColor: '#53B175',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 19,
    width: width * 0.7,
    height: 65,
    alignItems: 'center',
    marginBottom: 10,
  },
  retryButtonText: {
    color: '#FFF9FF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  homeButton: {
    paddingVertical: 10,
  },
  homeButtonText: {
    color: '#181725',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
});

export default OrderFailedModal;
