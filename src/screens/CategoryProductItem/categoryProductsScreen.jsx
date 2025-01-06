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
import ProductItem from '../../components/productItem';
import {useGetCategoryProductsQuery} from '../../seivices/api/productApi';

const CategoryProductsScreen = ({route, navigation}) => {
  const {category} = route.params;

  const {
    data: products,
    isLoading,
    error,
    refetch,
  } = useGetCategoryProductsQuery(category.id, {
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const handleProductPress = item => {
    // Make sure all required properties are properly formatted
    const productData = {
      id: item.id,
      name: item.name,
      price: item.price.toString().startsWith('$')
        ? item.price
        : `$${item.price}`,
      productQuantity: item.quantity || '1 kg', // Provide default if missing
      image: item.imageUrl?.startsWith('http')
        ? item.imageUrl
        : `http://192.168.1.27:7193${item.imageUrl}`,
    };

    // Log the data being passed (for debugging)
    console.log('Navigating to ProductDetailScreen with:', productData);

    navigation.navigate('ProductDetailScreen', {
      product: productData,
    });
  };

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
          <TouchableOpacity onPress={() => handleProductPress(item)}>
            <ProductItem
              name={item.name}
              productQuantity={item.quantity}
              price={item.price}
              image={{uri: `http://192.168.1.27:7193${item.imageUrl}`}}
              style={styles.customProductItem}
            />
          </TouchableOpacity>
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
