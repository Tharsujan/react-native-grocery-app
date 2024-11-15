import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoriteItem = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>{item.size}, Price</Text>
      </View>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Icon name="chevron-forward-outline" size={20} color="#181725" />
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
    width: 30,
    height: 54,
    marginRight: 32,
    resizeMode: 'contain',
    paddingLeft: 32,
  },
  itemInfo: {
    flex: 1,
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
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    fontFamily: 'Gilroy',
    marginRight: 10,
  },
});

export default FavoriteItem;
