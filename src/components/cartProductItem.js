import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const CartProductItem = ({item, onIncrease, onDecrease, onRemove}) => {
  const totalPrice = (item.price * item.quantity).toFixed(2);
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.size}>{item.size}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={onDecrease} style={styles.button}>
            <MaterialIcons name="remove" size={28} color="#B3B3B3" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={onIncrease} style={styles.button}>
            <MaterialIcons name="add" size={28} color="#53B175" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <TouchableOpacity onPress={onRemove}>
          <MaterialIcons name="close" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.price}>${totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    height: 160,
  },
  image: {
    width: 70,
    height: 64,
    marginRight: 30,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Gilroy',
    color: '#181725',
    marginBottom: 5,
  },
  size: {
    fontSize: 14,
    color: '#7C7C7C',
    fontFamily: 'Gilroy',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#181725',
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  priceContainer: {
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
    marginTop: 50,
  },
  remove: {
    fontSize: 24,
    color: '#7C7C7C',
  },
});

export default CartProductItem;
