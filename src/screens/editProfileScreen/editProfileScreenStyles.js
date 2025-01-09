import {StyleSheet} from 'react-native';
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

export default styles;
