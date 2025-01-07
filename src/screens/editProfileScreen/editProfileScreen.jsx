import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUpdateProfilePictureMutation,
  useDeleteProfilePictureMutation,
} from '../../seivices/api/authApi';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const [updateProfile] = useUpdateProfileMutation();
  const {data: profile, refetch} = useGetProfileQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateProfilePicture, {isLoading}] = useUpdateProfilePictureMutation();
  const [deleteProfilePicture, {isLoading: isDeleting}] =
    useDeleteProfilePictureMutation();

  const [username, setUsername] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [animatedHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    if (profile) {
      setUsername(profile.username || '');
      setProfilePictureUrl(profile.profilePictureUrl || '');
    }
  }, [profile]);

  // Toggle password fields visibility with animation
  const togglePasswordFields = () => {
    setShowPasswordFields(!showPasswordFields);
    Animated.timing(animatedHeight, {
      toValue: showPasswordFields ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
    if (!showPasswordFields) {
      setOldPassword('');
      setNewPassword('');
    }
  };

  const handleProfileUpdate = async () => {
    try {
      // Handle profile picture update if there's a selected image
      if (selectedImage) {
        const formData = new FormData();
        formData.append('file', {
          uri: selectedImage.uri,
          type: selectedImage.type,
          name: selectedImage.fileName || `profile_${Date.now()}.jpg`,
        });

        try {
          await updateProfilePicture(formData).unwrap();
          setSelectedImage(null); // Clear the selected image after upload
        } catch (error) {
          console.error('Failed to update profile picture:', error);
          Alert.alert('Error', 'Failed to update profile picture.');
          return; // Exit if profile picture update fails
        }
      }

      // Handle profile data update (username and/or password)
      const updateData = {};

      if (username !== profile.username) {
        updateData.username = username;
      }

      if (showPasswordFields && oldPassword && newPassword) {
        updateData.oldPassword = oldPassword;
        updateData.newPassword = newPassword;
      }

      // Only proceed with profile update if there are changes
      if (Object.keys(updateData).length > 0) {
        await updateProfile(updateData).unwrap();
      }

      // Show success message and navigate
      Alert.alert('Success', 'Profile updated successfully', [
        {
          text: 'OK',
          onPress: () => {
            refetch(); // Refresh the profile data
            navigation.navigate('BottomNavbar', {screen: 'AccountScreen'});
          },
        },
      ]);

      // Reset password fields and hide them
      if (showPasswordFields) {
        setShowPasswordFields(false);
        setOldPassword('');
        setNewPassword('');
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
      Alert.alert('Error', error?.data?.message || 'Failed to update profile');
    }
  };

  const handleChangePicture = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        return;
      } else if (response.errorCode) {
        Alert.alert('Error', 'Failed to select image. Please try again.');
      } else {
        setSelectedImage(response.assets[0]); // Save the selected image
        setProfilePictureUrl(response.assets[0]?.uri || '');
        setImageError(false);
      }
    });
  };
  //   const handleProfileUpdate = async () => {
  //     if (selectedImage) {
  //       const formData = new FormData();
  //       formData.append('file', {
  //         uri: selectedImage.uri,
  //         type: selectedImage.type,
  //         name: selectedImage.fileName || `profile_${Date.now()}.jpg`,
  //       });

  //       try {
  //         await updateProfilePicture(formData).unwrap();
  //         Alert.alert('Success', 'Profile picture updated successfully.', [
  //           {
  //             text: 'OK',
  //             onPress: () =>
  //               navigation.navigate('BottomNavbar', {screen: 'AccountScreen'}),
  //           },
  //         ]);
  //         refetch(); // Refresh the profile data
  //         setSelectedImage(null); // Clear the selected image after upload
  //       } catch (error) {
  //         console.error('Failed to update profile picture:', error);
  //         Alert.alert('Error', 'Failed to update profile picture.');
  //       }
  //     } else {
  //       Alert.alert('Info', 'No new image selected.');
  //     }
  //   };

  const handleDeletePicture = async () => {
    Alert.alert(
      'Delete Picture',
      'Are you sure you want to delete your profile picture?',
      [
        {
          text: 'Cancel',
          style: 'cancel', // Highlight the Cancel button
          onPress: () => console.log('Delete cancelled'),
        },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await deleteProfilePicture().unwrap();
              Alert.alert('Success', 'Profile picture deleted successfully.', [
                {
                  text: 'OK',
                  onPress: () =>
                    navigation.navigate('BottomNavbar', {
                      screen: 'AccountScreen',
                    }),
                },
              ]);
              setProfilePictureUrl(''); // Clear the profile picture URL
              refetch(); // Refresh the profile data
            } catch (error) {
              console.error('Failed to delete profile picture:', error);
              Alert.alert('Error', 'Failed to delete profile picture.');
            }
          },
        },
      ],
      {cancelable: true}, // Dismiss the alert if tapped outside
    );
  };

  const getFixedImageUrl = url => {
    if (!url) return null;
    return url.replace('/uploads/uploads/', '/uploads/');
  };

  const getProfileImageSource = () => {
    if (imageError || !profilePictureUrl) {
      return require('../../assests/profile.png');
    }
    return {uri: getFixedImageUrl(profilePictureUrl)};
  };

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="#181725" />
      </TouchableOpacity>
      {/* Profile Picture Section */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={getProfileImageSource()}
          style={styles.profilePicture}
          onError={() => setImageError(true)}
        />
        <TouchableOpacity
          style={styles.editPictureButton}
          onPress={handleChangePicture}>
          <Text style={styles.editPictureText}>Change Picture</Text>
        </TouchableOpacity>
        {profilePictureUrl ? (
          <TouchableOpacity
            style={styles.deletePictureButton}
            onPress={handleDeletePicture}
            disabled={isDeleting}>
            <Text style={styles.deletePictureText}>
              {isDeleting ? 'Deleting...' : 'Delete Picture'}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {/* Username Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
      </View>
      <TouchableOpacity
        style={[
          styles.changePasswordButton,
          showPasswordFields && styles.changePasswordButtonActive,
        ]}
        onPress={togglePasswordFields}>
        <View style={styles.changePasswordButtonContent}>
          <Text style={styles.changePasswordText}>
            {showPasswordFields ? 'Cancel Password Change' : 'Change Password'}
          </Text>
          <Icon
            name={showPasswordFields ? 'chevron-up' : 'chevron-down'}
            size={24}
            color="#28a745"
          />
        </View>
      </TouchableOpacity>

      {/* Animated Password Fields */}
      <Animated.View
        style={[
          styles.passwordFieldsContainer,
          {
            maxHeight: animatedHeight.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 200],
            }),
            opacity: animatedHeight,
          },
        ]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={oldPassword}
              onChangeText={setOldPassword}
              placeholder="Enter current password"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon
                name={passwordVisible ? 'eye-off' : 'eye'}
                size={24}
                color="#666"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              secureTextEntry={!passwordVisible}
            />
          </View>
        </View>
      </Animated.View>

      {/* Save Profile Changes Button */}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleProfileUpdate}
        disabled={isLoading}>
        <Text style={styles.saveButtonText}>
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e0e0e0',
  },
  editPictureButton: {
    marginTop: 10,
  },
  editPictureText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deletePictureButton: {
    marginTop: 10,
  },
  deletePictureText: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#181725',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#181725',
    backgroundColor: '#fff',
  },
  passwordInputContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{translateY: -12}],
  },
  changePasswordButton: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  changePasswordButtonActive: {
    backgroundColor: '#e8f5e9',
    borderColor: '#28a745',
  },
  changePasswordButtonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changePasswordText: {
    color: '#28a745',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordFieldsContainer: {
    overflow: 'hidden',
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    elevation: 2,
  },
  saveButtonDisabled: {
    backgroundColor: '#93c9a0',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
