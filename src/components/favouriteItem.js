import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useRemoveFromFavoritesMutation} from '../seivices/api/favoriteApi';
import Toast from 'react-native-toast-message';
const BASE_URL = 'http://192.168.1.27:7193';

const FavoriteItem = ({item, onRemove, onShowModal}) => {
  const [removeFromFavorites, {isLoading}] = useRemoveFromFavoritesMutation();
  // Construct the full image URL
  const getFullImageUrl = imageUrl => {
    if (!imageUrl) return null;
    if (imageUrl.startsWith('http')) return imageUrl;
    return `${BASE_URL}${imageUrl}`;
  };
  const handleRemove = async () => {
    try {
      await removeFromFavorites(item.id).unwrap();
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `${item.name} deleted to favoriteItems successfully`,
        visibilityTime: 3000, // Duration in milliseconds
        position: 'center', // Position of the toast
      });
      // Alert.alert('Success', `${item.name} removed from favorites`);
      if (onRemove) {
        onRemove(item.id);
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'error',
        text2: `Failed to remove from favorites`,
        visibilityTime: 3000, // Duration in milliseconds
        position: 'center', // Position of the toast
      });
      // Alert.alert(
      //   'Error',
      //   error.data?.message || '',
      // );
    }
  };

  const handleRemoveConfirmation = () => {
    Alert.alert(
      'Remove from Favorites',
      'Are you sure you want to remove this item from favorites?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: handleRemove,
          style: 'destructive',
        },
      ],
    );
  };
  return (
    <View style={styles.itemContainer}>
      {/* Product Image */}
      <Image
        source={{
          uri: getFullImageUrl(item.imageUrl),
          headers: {
            // Add any headers needed for image loading
            Accept: 'image/jpeg',
            'Cache-Control': 'no-cache',
          },
        }}
        //defaultSource={require('../../assests/placeholder.png')}
        style={styles.itemImage}
      />

      {/* Product Info */}
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>
          {item.quantity || 'No size info'}, Price
        </Text>
      </View>

      {/* Price and Actions */}
      <View style={styles.rightSection}>
        <Text style={styles.itemPrice}>
          ${parseFloat(item.price).toFixed(2)}
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={handleRemoveConfirmation}
            disabled={isLoading}
            style={[styles.removeButton, isLoading && styles.disabledButton]}>
            <MaterialIcons name="delete-outline" size={24} color="#FF4B4B" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShowModal}>
            <Icon name="add" size={20} color="#181725" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    height: 115,
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 16,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginRight: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Gilroy-Bold',
    color: '#181725',
    marginBottom: 5,
  },
  itemDetails: {
    fontSize: 14,
    fontFamily: 'Gilroy-Medium',
    color: '#7C7C7C',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    fontFamily: 'Gilroy',
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    padding: 4,
    marginRight: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default FavoriteItem;
