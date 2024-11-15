import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Section from '../../components/section';
import ProductItem from '../../components/productItem';
import CategoryItem from '../../components/categoryItem';
import styles from './shopScreenstyles';

const productsExclusiveOffer = [
  {
    name: 'Organic Bananas',
    productQuantity: '7pcs, Priceg',
    price: '$4.99',
    image:
      'https://media.istockphoto.com/id/465069526/photo/isolated-shot-of-bunch-of-bananas-on-white-background.jpg?s=612x612&w=0&k=20&c=RIyYBUXSJ7dlPwRxrasmtSYdJXRPCrYgrCu7YPbGAA8=',
  },
  {
    name: 'Red Apple',
    productQuantity: '1Kg, Priceg',
    price: '$4.99',
    image:
      'https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=',
  },
  {
    name: 'Red Apple',
    productQuantity: '1Kg, Priceg',
    price: '$4.99',
    image:
      'https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=',
  },
  // Add more products as needed
];
const bestSelling = [
  {
    name: 'Carrots',
    productQuantity: '7pcs, Priceg',
    price: '$1.99',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg',
  },
  {
    name: 'Broccoli',
    productQuantity: '4pcs, Priceg',
    price: '$2.49',
    image:
      'https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg',
  },
  {
    name: 'Carrots',
    productQuantity: '7pcs, Priceg',
    price: '$1.99',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg',
  },
  {
    name: 'Broccoli',
    productQuantity: '4pcs, Priceg',
    price: '$2.49',
    image:
      'https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg',
  },
];
const grocerios = [
  {
    name: 'Pulses',
    image:
      'https://justorganikusa.com/wp-content/uploads/2023/07/pulses-and-lentils.png', // Replace with actual image URL
    backgroundColor: '#F8A44C',
  },
  {
    name: 'Rice',
    image:
      'https://commongrains.com/wp-content/uploads/2023/01/Is-Rice-A-Grain-Or-Seed.jpg', // Replace with actual image URL
    backgroundColor: '#53B175',
  },
  {
    name: 'Pulses',
    image:
      'https://justorganikusa.com/wp-content/uploads/2023/07/pulses-and-lentils.png', // Replace with actual image URL
    backgroundColor: '#F8A44C',
  },
  {
    name: 'Rice',
    image:
      'https://commongrains.com/wp-content/uploads/2023/01/Is-Rice-A-Grain-Or-Seed.jpg', // Replace with actual image URL
    backgroundColor: '#53B175',
  },
];

const nonVeg = [
  {
    name: 'Beef Bone',
    productQuantity: '1Kg, Priceg',
    price: '$1.99',
    image:
      'https://i.chaldn.com/_mpimage/chaldal-premium-beef-bone-in-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131834&q=best&v=1',
  },
  {
    name: 'Broiler Chicken',
    productQuantity: '1Kg, Priceg',
    price: '$2.49',
    image:
      'https://foodgravy.com/wp-content/uploads/2020/12/Difference-Between-Country-Vs-and-Broiler-Chicken-Explained.jpg',
  },
  {
    name: 'Beef Bone',
    productQuantity: '1Kg, Priceg',
    price: '$1.99',
    image:
      'https://i.chaldn.com/_mpimage/chaldal-premium-beef-bone-in-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131834&q=best&v=1',
  },
  {
    name: 'Broiler Chicken',
    productQuantity: '1Kg, Priceg',
    price: '$2.49',
    image:
      'https://foodgravy.com/wp-content/uploads/2020/12/Difference-Between-Country-Vs-and-Broiler-Chicken-Explained.jpg',
  },
];
const ShopScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  // Function to handle navigation to ProductDetailScreen
  const navigateToProductDetail = product => {
    navigation.navigate('ProductDetailScreen', {product});
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}>
      {/* Location and Search Bar */}
      <View style={styles.header}>
        <Image
          source={require('../../assests/header.png')}
          style={styles.headerImage}
        />
        <View style={styles.locationContainer}>
          <Icon name="location" size={20} color="#4C4F4D" />
          <Text style={styles.location}>Dhaka, Banassre</Text>
        </View>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#181B19" />
          <TextInput style={styles.searchInput} placeholder="Search Store" />
        </View>
      </View>
      {/* Banner Section */}
      <Image
        source={require('../../assests/banner.png')}
        style={styles.banner}
      />
      <Section title="Exclusive Offer">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          {productsExclusiveOffer.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToProductDetail(product)}>
              <ProductItem
                key={index} // Ensure each item has a unique key
                name={product.name}
                productQuantity={product.productQuantity}
                price={product.price}
                image={product.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Section>
      <Section title="Best Selling">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          {bestSelling.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToProductDetail(product)}>
              <ProductItem
                key={index}
                name={product.name}
                productQuantity={product.productQuantity}
                price={product.price}
                image={product.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Section>
      <Section title="Groceries">
        <View style={styles.categoriesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}>
            {grocerios.map((product, index) => (
              <CategoryItem
                key={index}
                name={product.name}
                image={product.image}
                backgroundColor={product.backgroundColor}
              />
            ))}
          </ScrollView>
          {/* Add more CategoryItems as needed with unique colors */}
        </View>
      </Section>
      <Section title="Meat & Fishes">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          {nonVeg.map((product, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToProductDetail(product)}>
              <ProductItem
                key={index}
                name={product.name}
                productQuantity={product.productQuantity}
                price={product.price}
                image={product.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Section>
    </ScrollView>
  );
};

export default ShopScreen;
