import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import FavoriteItem from '../../components/favouriteItem';
import styles from './favouriteScreenStyles';

const FavoriteScreen = () => {
  const favoriteItems = [
    {
      id: '1',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
    {
      id: '2',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
    {
      id: '3',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
    {
      id: '4',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
    {
      id: '5',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
    {
      id: '6',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
    {
      id: '7',
      name: 'Sprite Can',
      size: '325ml',
      price: '1.50',
      image: require('../../assests/sprit.png'),
    },
  ];

  const renderFavoriteItem = ({item}) => <FavoriteItem item={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favourite</Text>
      <View style={styles.headerBorder} />
      <View style={styles.listContainer}>
        <FlatList
          data={favoriteItems}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add All To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteScreen;
