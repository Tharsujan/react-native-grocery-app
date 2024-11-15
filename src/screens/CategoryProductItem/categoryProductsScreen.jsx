// CategoryDetailScreen.js
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './categoryProductStyles';
import ProductItem from '../../components/productItem'; // Adjust the path as needed

const CategoryProductsScreen = ({route, navigation}) => {
  const {category} = route.params;

  // Example product data
  const products = [
    {
      id: '1',
      name: 'Diet Coke',
      productQuantity: '330ml',
      price: '$1.99',
      image: 'https://example.com/diet_coke.png',
    },
    {
      id: '2',
      name: 'Sprite Can',
      productQuantity: '330ml',
      price: '$1.50',
      image: 'https://example.com/sprite.png',
    },
    {
      id: '3',
      name: 'Sprite Can',
      productQuantity: '330ml',
      price: '$1.50',
      image: 'https://example.com/sprite.png',
    },
    // Add more product items as needed
  ];

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <TouchableOpacity>
          <FontAwesome6 name="sliders" size={20} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            name={item.name}
            productQuantity={item.productQuantity}
            price={item.price}
            image={item.image}
            style={styles.customProductItem}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryProductsScreen;
