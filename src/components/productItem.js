import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const ProductItem = ({name, productQuantity, price, image, style}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View style={[styles.productItem, style]}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.productImage}
          onLoadStart={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
        />
        {imageLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#0DB06D" />
          </View>
        )}
      </View>
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productQuantity}>{productQuantity}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    width: width * 0.43, // Slightly wider for better spacing
    height: 220, // Slightly taller to accommodate loading state
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E2E2E2', // Lighter border color
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    elevation: 2, // Add shadow on Android
    shadowColor: '#000', // Add shadow on iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    color: '#181725',
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productQuantity: {
    fontSize: 14,
    color: '#7C7C7C',
    fontFamily: 'Gilroy-Medium',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 'auto', // Push to bottom
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Gilroy',
    color: '#181725',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#0DB06D',
    borderRadius: 17,
    padding: 5,
    marginLeft: 10,
  },
});

export default ProductItem;
