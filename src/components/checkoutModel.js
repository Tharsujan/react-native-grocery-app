import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CheckoutModal = ({visible, onClose, total, onPlaceOrder}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={30} color="#181725" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalRow}>
              <Text style={styles.modalText}>Delivery</Text>
              <Text style={styles.selectText}>Select Method</Text>
              <Icon name="chevron-forward" size={20} color="#181725" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalRow}>
              <Text style={styles.modalText}>Payment</Text>
              <FontAwesome
                name="cc-mastercard"
                size={30}
                style={styles.paymentIcon}
              />
              <Icon name="chevron-forward" size={20} color="#181725" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalRow}>
              <Text style={styles.modalText}>Promo Code</Text>
              <Text style={styles.discountText}>Pick discount</Text>
              <Icon name="chevron-forward" size={20} color="#181725" />
            </TouchableOpacity>
            <View style={styles.modalRow}>
              <Text style={styles.modalText}>Total Cost</Text>
              <Text style={styles.totalText}>${total}</Text>
              <Icon name="chevron-forward" size={20} color="#181725" />
            </View>
            <Text style={styles.termsText}>
              By placing an order you agree to our{' '}
              <Text style={styles.boldText}>Terms </Text> And{' '}
              <Text style={styles.boldText}>Conditions</Text>.
            </Text>

            <TouchableOpacity
              style={styles.placeOrderButton}
              onPress={onPlaceOrder}>
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#F2F3F2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    //maxHeight: '70%',
    height: 496,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 10,
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderColor: '#E2E2E2',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Gilroy',
  },
  closeButton: {
    fontSize: 28,
    color: '#181725',
  },
  modalContent: {
    marginTop: 10,
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#7C7C7C',
    fontFamily: 'Gilroy',
  },
  selectText: {
    fontSize: 16,
    marginLeft: 140,
    color: '#181725',
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  discountText: {
    fontSize: 16,
    marginLeft: 120,
    color: '#181725',
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#181725',
    marginLeft: 180,
    fontFamily: 'Gilroy',
  },
  paymentIcon: {
    color: 'blue',
    marginLeft: 200,
  },
  termsText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Gilroy',
  },
  boldText: {
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#53B175',
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: 15,
    marginTop: 25,
  },
  placeOrderText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CheckoutModal;
