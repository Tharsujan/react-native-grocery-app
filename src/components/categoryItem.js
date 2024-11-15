import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryItem = ({name, image, backgroundColor, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPress={onPress}>
      <View style={styles.productDetails}>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.categoryName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 225,
    height: 100,
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 80,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 15,
  },
  categoryName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
    color: '#3E423F',
    fontFamily: 'Gilroy',
  },
});

export default CategoryItem;
