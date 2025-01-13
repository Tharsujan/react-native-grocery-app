import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteItem from '../../components/favouriteItem';
import styles from './favouriteScreenStyles';
import {useGetFavoritesQuery} from '../../seivices/api/favoriteApi';
import {useAddToCartMutation} from '../../seivices/api/cartApi';
const BASE_URL = 'http://192.168.1.27:7193';

const FavoriteScreen = () => {
  const getFullImageUrl = imageUrl => {
    if (!imageUrl) return null;
    if (imageUrl.startsWith('http')) return imageUrl;
    return `${BASE_URL}${imageUrl}`;
  };
  const [addToCart] = useAddToCartMutation();
  const {
    data: favoriteItems,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetFavoritesQuery(undefined, {
    // Add polling to keep data fresh
    pollingInterval: 0,
    // Prevent cached data from being shown while refetching
    refetchOnMountOrArgChange: true,
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log('Favorites Data:', favoriteItems); // Debug log
  // console.log('Error if any:', error); // Debug log

  // Handle loading state
  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.errorText}>
          {error?.data?.message || 'Failed to load favorites'}
        </Text>
        <TouchableOpacity style={styles.retryButton} onPress={refetch}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }
  const handleItemRemoved = () => {
    // Refetch the favorites list after an item is removed
    refetch();
  };

  const handleShowModal = item => {
    setSelectedItem(item);
    setQuantity(1);
    setIsModalVisible(true);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: selectedItem.id,
        quantity: quantity,
      }).unwrap();
      setIsModalVisible(false);
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: `${selectedItem.name} added to cart successfully`,
        visibilityTime: 3000, // Duration in milliseconds
        position: 'top', // Position of the toast
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to add item to cart',
        visibilityTime: 2000,
        position: 'bottom',
      });
    }
  };

  const renderFavoriteItem = ({item}) => (
    <FavoriteItem
      item={item}
      onRemove={handleItemRemoved}
      onShowModal={() => handleShowModal(item)}
    />
  );

  {
    /*  const handleAddAllToCart = async () => {
     try {
     // Add each favorite item to cart with quantity 1
       const promises = favoriteItems.map(item =>
         addToCart({productId: item.id, quantity: 1}).unwrap(),
       );

     await Promise.all(promises);

       Alert.alert('Success', 'All items added to cart successfully', [
         {
         text: 'Continue Shopping',
           onPress: () => {},
           style: 'cancel',
         },
         {
           text: 'Go to Cart',
           onPress: () => navigation.navigate('CartScreen'),
         },
       ]);
     } catch (error) {
       Alert.alert('Error', 'Failed to add some items to cart');
     }
   }; */
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite</Text>
      <View style={styles.headerBorder} />
      <View style={styles.listContainer}>
        {favoriteItems?.length > 0 ? (
          <FlatList
            data={favoriteItems}
            renderItem={renderFavoriteItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.list}
            onRefresh={refetch}
            refreshing={isLoading}
          />
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favorite items found</Text>
          </View>
        )}
      </View>
      {/* 
      {favoriteItems?.length > 0 && (
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddAllToCart}>
          <Text style={styles.addToCartButtonText}>Add All To Cart</Text>
        </TouchableOpacity>
      )} */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setIsModalVisible(false)}>
              <Icon name="close" size={24} color="#181725" />
            </TouchableOpacity>

            <View style={styles.modalHeader}>
              <Image
                source={{uri: getFullImageUrl(selectedItem?.imageUrl)}}
                style={styles.modalProductImage}
              />
              <View style={styles.modalProductInfo}>
                <Text style={styles.modalProductName}>
                  {selectedItem?.name}
                </Text>
                <Text>{selectedItem?.quantity}</Text>
                <Text>${selectedItem?.price}</Text>
              </View>
            </View>

            <View style={styles.modalDivider} />

            <View style={styles.modalPriceSection}>
              <Text style={styles.totalAmountLabel}>Total Amount:</Text>
              <Text style={styles.totalAmount}>
                Rs{' '}
                {(parseFloat(selectedItem?.price || 0) * quantity).toFixed(2)}
              </Text>
            </View>

            <View style={styles.modalFooter}>
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => quantity > 1 && setQuantity(q => q - 1)}>
                  <Icon name="remove" size={24} color="#181725" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => setQuantity(q => q + 1)}>
                  <Icon name="add" size={24} color="#181725" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.modalAddToCartButton}
                onPress={handleAddToCart}>
                <Text style={styles.modalAddToCartText}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FavoriteScreen;
