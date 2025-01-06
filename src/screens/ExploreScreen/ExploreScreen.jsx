// ExploreScreen.js
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import CategoryCard from '../../components/categoryCard';
import styles from './exploreScreenStyles';
import {useGetAllCategoriesQuery} from '../../seivices/api/categoryApi';

const ExploreScreen = () => {
  const navigation = useNavigation();
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetAllCategoriesQuery(undefined, {
    pollingInterval: 0,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation, refetch]);

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
        <Text style={styles.errorText}>Error loading categories</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Products</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#181B19" />
        <TextInput style={styles.searchInput} placeholder="Search Category" />
      </View>

      {/* Category Grid */}
      <FlatList
        data={categories}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('CategoryProductsScreen', {category: item})
            }>
            <CategoryCard
              title={item.name}
              imageSource={{uri: `http://192.168.1.27:7193${item.imageUrl}`}}
              backgroundColor={item.backgroundColor}
              borderColor={item.borderColor}
            />
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={isLoading}
      />
    </View>
  );
};

export default ExploreScreen;
