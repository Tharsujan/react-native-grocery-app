import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './productDetailScreenstyles';

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
  const [isFavorite, setIsFavorite] = useState(false);
  if (!product) {
    return null;
  }

  const toggleDetailVisibility = () => {
    setIsDetailVisible(!isDetailVisible);
  };
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;

  // Increase quantity
  const incrementQuantity = () => setQuantity(quantity + 1);

  // Decrease quantity (minimum is 1)
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
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
          <TouchableOpacity onPress={toggleFavorite}>
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
            kbdbkshjbhjfbhb snzzbkjdbn kbdskb sndnkcbj
          </Text>
        )}
      </View>
      {/* Nutrition and Review */}
      <TouchableOpacity style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>Nutritions</Text>
        <Text style={styles.nutritionWeight}>100gr</Text>
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
      {/* Add to Basket Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add To Basket</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
