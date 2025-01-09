// CartScreen.jsx
import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import CartProductItem from '../../components/cartProductItem';
import CheckoutModal from '../../components/checkoutModel';
import styles from './cartScreenStyles';
import {
  useUpdateCartItemMutation,
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
} from '../../seivices/api/cartApi';

const CartScreen = ({navigation}) => {
  // const [cartItems, setCartItems] = useState([
  //   {
  //     id: '1',
  //     name: 'Bell Pepper Red',
  //     size: '1kg, Price',
  //     price: '4.99',
  //     quantity: 1,
  //     image: require('../../assests/bell-pepper.png'),
  //   },
  //   {
  //     id: '2',
  //     name: 'Bell Pepper Red',
  //     size: '1kg, Price',
  //     price: '4.99',
  //     quantity: 1,
  //     image: require('../../assests/bell-pepper.png'),
  //   },
  //   {
  //     id: '3',
  //     name: 'Bell Pepper Red',
  //     size: '1kg, Price',
  //     price: '4.99',
  //     quantity: 1,
  //     image: require('../../assests/bell-pepper.png'),
  //   },
  //   {
  //     id: '4',
  //     name: 'Bell Pepper Red',
  //     size: '1kg, Price',
  //     price: '4.99',
  //     quantity: 1,
  //     image: require('../../assests/bell-pepper.png'),
  //   },
  //   {
  //     id: '5',
  //     name: 'Bell Pepper Red',
  //     size: '1kg, Price',
  //     price: '4.99',
  //     quantity: 1,
  //     image: require('../../assests/bell-pepper.png'),
  //   },
  // ]);

  const [modalVisible, setModalVisible] = useState(false);

  const {
    data: cartItems,
    isLoading,
    error,
    refetch,
  } = useGetCartItemsQuery(undefined, {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
  });
  const [updateCartItem] = useUpdateCartItemMutation();
  const [removeFromCart] = useRemoveFromCartMutation();
  const handleIncrease = async (id, currentQuantity) => {
    try {
      await updateCartItem({id, quantity: currentQuantity + 1});
      refetch();
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const handleDecrease = async (id, currentQuantity) => {
    if (currentQuantity > 1) {
      try {
        await updateCartItem({id, quantity: currentQuantity - 1});
        refetch();
      } catch (error) {
        console.error('Error decreasing quantity:', error);
      }
    }
  };

  const handleRemove = async id => {
    try {
      await removeFromCart(id);
      refetch();
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const total = cartItems
    ? cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    : '0.00';

  const handlePlaceOrder = () => {
    setModalVisible(false);
    navigation.navigate('OrderAcceptedScreen');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading cart items</Text>
      </View>
    );
  }

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
              onIncrease={() => handleIncrease(item.id, item.quantity)}
              onDecrease={() => handleDecrease(item.id, item.quantity)}
              onRemove={() => handleRemove(item.id)}
            />
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => setModalVisible(true)}
          disabled={!cartItems?.length}>
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
