// ExploreScreen.js
import React from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import CategoryCard from '../../components/categoryCard';
import styles from './exploreScreenStyles';

const categories = [
  {
    title: 'Fresh Fruits & Vegetables',
    imageSource: require('../../assests/fruits.png'),
    backgroundColor: '#F0FFF4',
    borderColor: '#53B175',
  },
  {
    title: 'Cooking Oil & Ghee',
    imageSource: require('../../assests/oil.png'),
    backgroundColor: '#FFF7E6',
    borderColor: '#FFCC80',
  },
  {
    title: 'Meat & Fish',
    imageSource: require('../../assests/meat.png'),
    backgroundColor: '#FFEFEF',
    borderColor: '#FFA726',
  },
  {
    title: 'Bakery & Snacks',
    imageSource: require('../../assests/bakery.png'),
    backgroundColor: '#F7E6FF',
    borderColor: '#CE93D8',
  },
  {
    title: 'Dairy & Eggs',
    imageSource: require('../../assests/dairy.png'),
    backgroundColor: '#FFF9E6',
    borderColor: '#FFD54F',
  },
  {
    title: 'Beverages',
    imageSource: require('../../assests/beverages.png'),
    backgroundColor: '#E6F7FF',
    borderColor: '#81D4FA',
  },

  // Add more categories if needed
];

const ExploreScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Products</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#181B19" />
        <TextInput style={styles.searchInput} placeholder="Search Store" />
      </View>

      {/* Category Grid */}
      <FlatList
        data={categories}
        keyExtractor={item => item.title}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CategoryProductsScreen', {category: item})
            }>
            <CategoryCard
              title={item.title}
              imageSource={item.imageSource}
              backgroundColor={item.backgroundColor}
              borderColor={item.borderColor}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExploreScreen;
