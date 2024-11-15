import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const ProductItem = ({name, productQuantity, price, image, style}) => (
  <View style={[styles.productItem, style]}>
    <Image source={{uri: image}} style={styles.productImage} />
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

const styles = StyleSheet.create({
  productItem: {
    width: width * 0.4,
    height: 210,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#7C7C7C',
    marginRight: 15,
  },
  productImage: {
    width: 130,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    color: '#333',
    alignItems: 'flex-start',
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
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
    paddingTop: 20,
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
