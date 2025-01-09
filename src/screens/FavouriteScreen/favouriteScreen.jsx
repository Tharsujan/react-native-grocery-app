import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import FavoriteItem from '../../components/favouriteItem';
import styles from './favouriteScreenStyles';
import {useGetFavoritesQuery} from '../../seivices/api/favoriteApi';

const FavoriteScreen = () => {
  // const favoriteItems = [
  //   {
  //     id: '1',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  //   {
  //     id: '2',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  //   {
  //     id: '3',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  //   {
  //     id: '4',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  //   {
  //     id: '5',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  //   {
  //     id: '6',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  //   {
  //     id: '7',
  //     name: 'Sprite Can',
  //     size: '325ml',
  //     price: '1.50',
  //     image: require('../../assests/sprit.png'),
  //   },
  // ];
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
  console.log('Favorites Data:', favoriteItems); // Debug log
  console.log('Error if any:', error); // Debug log

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
  const renderFavoriteItem = ({item}) => (
    <FavoriteItem item={item} onRemove={handleItemRemoved} />
  );

  const handleAddAllToCart = () => {
    // Implement add all to cart functionality
    Alert.alert('Success', 'All items added to cart');
  };
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

      {favoriteItems?.length > 0 && (
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddAllToCart}>
          <Text style={styles.addToCartButtonText}>Add All To Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FavoriteScreen;
