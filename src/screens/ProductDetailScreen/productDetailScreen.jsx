import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './productDetailScreenstyles';
import {
  useAddToFavoritesMutation,
  useCheckFavoriteQuery,
  useRemoveFromFavoritesMutation,
} from '../../seivices/api/favoriteApi';
import {useAddToCartMutation} from '../../seivices/api/cartApi';

const ProductDetailScreen = ({route, navigation}) => {
  const {product} = route.params || {};

  useEffect(() => {
    // Validate required product data
    if (!product || !product.name || !product.price || !product.image) {
      console.error('Invalid product data:', product);
      navigation.goBack();
      return;
    }
  }, [product]);

  const [quantity, setQuantity] = useState(1);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const {data: favoriteStatus, isLoading: checkingFavorite} =
    useCheckFavoriteQuery(product?.id);
  const [addToFavorites, {isLoading: isAdding}] = useAddToFavoritesMutation();
  const [removeFromFavorites, {isLoading: isRemoving}] =
    useRemoveFromFavoritesMutation();
  const [addToCart, {isLoading: isAddingToCart}] = useAddToCartMutation();

  //const [isFavorite, setIsFavorite] = useState(false);
  const isFavorite = favoriteStatus?.isFavorite;
  const isLoading = checkingFavorite || isAdding || isRemoving;
  if (!product) {
    return null;
  }

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };
  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFromFavorites(product.id).unwrap();
        //Alert.alert('Success', 'Removed from favorites');
      } else {
        await addToFavorites(product.id).unwrap();
        // Alert.alert('Success', 'Added to favorites');
      }
    } catch (error) {
      Alert.alert('Error', error.data?.message || 'Failed to update favorites');
    }
  };
  const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;

  // Increase quantity
  const incrementQuantity = () => setQuantity(quantity + 1);

  // Decrease quantity (minimum is 1)
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({
        productId: product.id,
        quantity: quantity,
      }).unwrap();
      Alert.alert('Success', 'Product added to cart successfully', [
        {
          text: 'Continue Shopping',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Go to Cart',
          onPress: () =>
            navigation.navigate('BottomNavbar', {screen: 'CartScreen'}),
        },
      ]);
    } catch (error) {
      Alert.alert('Error', error.data?.message || 'Failed to add item to cart');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Wrap the entire view in SafeAreaView */}
      <StatusBar backgroundColor="#7c7c7c" />
      {/* Header */}
      <View style={styles.topQuarter}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back" size={24} color="#181725" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-outline" size={24} color="#181725" />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        {product.image ? (
          <Image
            source={{uri: product.image}}
            style={styles.productImage}
            defaultSource={require('../../assests/bakery.png')} // Add a placeholder image
          />
        ) : (
          <View style={[styles.productImage, styles.placeholderImage]} />
        )}
      </View>
      {/* Product Info */}
      <View style={styles.productInfoContainer}>
        <View style={styles.productFavourite}>
          <Text style={styles.productName}>{product.name}</Text>
          <TouchableOpacity
            onPress={toggleFavorite}
            disabled={isLoading}
            style={[
              styles.favoriteButton,
              isLoading && styles.favoriteButtonDisabled,
            ]}>
            <MaterialIcons
              name={isFavorite ? 'favorite' : 'favorite-border'} // Change icon based on favorite state
              size={24}
              color={isFavorite ? '#53B175' : '#7C7C7C'} // Change color based on favorite state
              style={styles.favIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.productQuantity}>{product.productQuantity}</Text>
        <View style={styles.priceContainer}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decrementQuantity}>
              <MaterialIcons name="remove" size={28} color="#B3B3B3" />
            </TouchableOpacity>
            <View style={styles.quantityBox}>
              <Text style={styles.quantity}>{quantity}</Text>
            </View>
            <TouchableOpacity onPress={incrementQuantity}>
              <MaterialIcons name="add" size={28} color="#53B175" />
            </TouchableOpacity>
          </View>

          <Text style={styles.price}>
            ${(numericPrice * quantity).toFixed(2)}
          </Text>
        </View>
      </View>
      {/* Product Details */}
      <View style={styles.detailSection}>
        <TouchableOpacity
          onPress={toggleDetailVisibility}
          style={styles.detailHeader}>
          <Text style={styles.sectionTitle}>Product Detail</Text>
          <Icon
            name={isDetailVisible ? 'chevron-up' : 'chevron-down'} // Change icon based on state
            size={24}
            color="#181725"
            style={styles.detailVisibleIcon}
          />
        </TouchableOpacity>
        {isDetailVisible && (
          <Text style={styles.productDetailText}>
            {product.description || 'No details available'}
          </Text>
        )}
      </View>
      {/* Nutrition and Review */}
      <TouchableOpacity style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Nutritions</Text>
        <Text style={styles.nutritionWeight}>{product.nutrition || 'N/A'}</Text>
        <Icon name="chevron-forward" size={20} color="#181725" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.sectionRow, styles.reviewSection]}>
        <Text style={styles.sectionTitle}>Review</Text>
        <View style={styles.rating}>
          {Array(5)
            .fill()
            .map((_, index) => (
              <Icon key={index} name="star" size={18} color="#FFC107" />
            ))}
        </View>
        <Icon name="chevron-forward" size={20} color="#181725" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.addButton, isAddingToCart && styles.addButtonDisabled]}
        onPress={handleAddToCart}
        disabled={isAddingToCart}>
        <Text style={styles.addButtonText}>
          {isAddingToCart ? 'Adding...' : 'Add To Basket'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
