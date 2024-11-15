import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './accountScreenStyles';

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
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assests/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <View style={styles.profileEdit}>
            <Text style={styles.profileName}>Afsar Hossen</Text>
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="pencil-outline" size={20} color="#28a745" />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileEmail}>lmshuvo97@gmail.com</Text>
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
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('SplashScreen')}>
        <Icon name="log-out-outline" size={24} style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AccountScreen;
