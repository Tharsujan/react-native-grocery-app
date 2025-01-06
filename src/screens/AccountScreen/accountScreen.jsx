import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './accountScreenStyles';
import {AuthContext} from '../../utils/auth/auth';
import {useGetProfileQuery} from '../../seivices/api/authApi';

const menuItems = [
  {title: 'Orders', icon: 'receipt-outline'},
  {title: 'My Details', icon: 'card-outline'},
  {title: 'Delivery Address', icon: 'location-outline'},
  {title: 'Payment Methods', icon: 'wallet-outline'},
  {title: 'Promo Code', icon: 'pricetag-outline'},
  {title: 'Notifications', icon: 'notifications-outline'},
  {title: 'Help', icon: 'help-circle-outline'},
  {title: 'About', icon: 'information-circle-outline'},
];

const AccountScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const [imageError, setImageError] = useState(false);
  const {
    data: profile,
    isLoading,
    error,
    refetch,
  } = useGetProfileQuery(undefined, {refetchOnMountOrArgChange: true});
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
      setImageError(false); // Reset image error state when screen is focused
    });

    return unsubscribe;
  }, [navigation, refetch]);

  // Function to fix the URL by removing duplicate 'uploads' folder
  const getFixedImageUrl = url => {
    if (!url) return null;
    // Remove duplicate 'uploads' in the path if it exists
    return url.replace('/uploads/uploads/', '/uploads/');
  };

  // Function to get profile image source
  const getProfileImageSource = () => {
    if (imageError || !profile?.profilePictureUrl) {
      return require('../../assests/profile.png');
    }

    const fixedUrl = getFixedImageUrl(profile.profilePictureUrl);
    console.log('Fixed profile image URL:', fixedUrl);

    return {
      uri: fixedUrl,
      // Add cache control headers
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    };
  };

  const handleLogout = async () => {
    await logout();
  };

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <ActivityIndicator size="large" color="#28a745" />
      </View>
    );
  }
  if (error) {
    console.log('Error details:', error);
    return (
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Text style={{color: 'red'}}>
          Failed to load profile. Please try again.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Image
          source={getProfileImageSource()}
          style={styles.profileImage}
          // Add default image handling
          onError={error => {
            console.log('Image loading error:', error);
          }}
        />
        <View style={styles.profileInfo}>
          <View style={styles.profileEdit}>
            <Text style={styles.profileName}>
              {profile?.username || 'User'}
            </Text>
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="pencil-outline" size={20} color="#28a745" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileEmail}>{profile?.email || ''}</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Icon
              name={item.icon}
              size={24}
              color="#181725"
              style={styles.menuIcon}
            />
            <Text style={styles.menuText}>{item.title}</Text>
            <Icon name="chevron-forward" size={20} color="#181725" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="log-out-outline" size={24} style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AccountScreen;
