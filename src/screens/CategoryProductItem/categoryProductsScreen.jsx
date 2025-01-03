// CategoryDetailScreen.js
import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './categoryProductStyles';
import ProductItem from '../../components/productItem'; // Adjust the path as needed
import {useGetCategoryProductsQuery} from '../../seivices/api/productApi';

const CategoryProductsScreen = ({route, navigation}) => {
  const {category} = route.params;

  // Example product data
  // const products = [
  //   {
  //     id: '1',
  //     name: 'Diet Coke',
  //     productQuantity: '330ml',
  //     price: '$1.99',
  //     image: 'https://example.com/diet_coke.png',
  //   },
  //   {
  //     id: '2',
  //     name: 'Sprite Can',
  //     productQuantity: '330ml',
  //     price: '$1.50',
  //     image: 'https://example.com/sprite.png',
  //   },
  //   {
  //     id: '3',
  //     name: 'Sprite Can',
  //     productQuantity: '330ml',
  //     price: '$1.50',
  //     image: 'https://example.com/sprite.png',
  //   },
  //   // Add more product items as needed
  // ];
  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetCategoryProductsQuery(category.id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading products</Text>
        <TouchableOpacity onPress={refetch} style={styles.retryButton}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Category Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.categoryTitle}>{category.name}</Text>
        <TouchableOpacity>
          <FontAwesome6 name="sliders" size={20} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <ProductItem
            name={item.name}
            productQuantity={item.quantity}
            price={item.price}
            image={{uri: `http://192.168.1.27:7193${item.imageUrl}`}}
            style={styles.customProductItem}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={isLoading}
      />
    </View>
  );
};

export default CategoryProductsScreen;
