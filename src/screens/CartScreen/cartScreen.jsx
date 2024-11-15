// CartScreen.jsx
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from 'react-native';
import CartProductItem from '../../components/cartProductItem';
import CheckoutModal from '../../components/checkoutModel';
import styles from './cartScreenStyles';

const CartScreen = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Bell Pepper Red',
      size: '1kg, Price',
      price: '4.99',
      quantity: 1,
      image: require('../../assests/bell-pepper.png'),
    },
    {
      id: '2',
      name: 'Bell Pepper Red',
      size: '1kg, Price',
      price: '4.99',
      quantity: 1,
      image: require('../../assests/bell-pepper.png'),
    },
    {
      id: '3',
      name: 'Bell Pepper Red',
      size: '1kg, Price',
      price: '4.99',
      quantity: 1,
      image: require('../../assests/bell-pepper.png'),
    },
    {
      id: '4',
      name: 'Bell Pepper Red',
      size: '1kg, Price',
      price: '4.99',
      quantity: 1,
      image: require('../../assests/bell-pepper.png'),
    },
    {
      id: '5',
      name: 'Bell Pepper Red',
      size: '1kg, Price',
      price: '4.99',
      quantity: 1,
      image: require('../../assests/bell-pepper.png'),
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleIncrease = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const handleDecrease = id => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? {...item, quantity: item.quantity - 1}
          : item,
      ),
    );
  };

  const handleRemove = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handlePlaceOrder = () => {
    setModalVisible(false);
    navigation.navigate('OrderAcceptedScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Cart</Text>
      <View style={styles.headerBorder} />
      <View style={styles.listContainer}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => (
            <CartProductItem
              item={item}
              onIncrease={() => handleIncrease(item.id)}
              onDecrease={() => handleDecrease(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <Text style={styles.totalPrice}>${total}</Text>
        </TouchableOpacity>
      </View>
      <CheckoutModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        total={total}
        onPlaceOrder={handlePlaceOrder}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
