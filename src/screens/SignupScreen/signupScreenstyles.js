import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  subContainer: {
    paddingHorizontal: 25,
  },
  logo: {
    marginTop: 75,
    alignSelf: 'center',
    width: 47,
    height: 55,
    marginBottom: 50,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
    color: '#181725',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Gilroy-medium',
    color: '#7C7C7C',
    marginBottom: 40,
  },
  inputTitle: {
    fontSize: 16,
    fontFamily: 'Gilroy',
    fontWeight: '600',
    color: '#7C7C7C',
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    fontSize: 18,
    color: '#181725',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  validationIcon: {
    marginBottom: 30,
    marginLeft: -20,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginBottom: 30,
    marginLeft: -20,
  },
  termsText: {
    marginTop: 10,
    fontFamily: 'Gilroy-medium',
    color: '#7C7C7C',
    fontSize: 14,
    textAlign: 'center',
  },
  linkText: {
    fontSize: 14,
    fontFamily: 'Gilroy-medium',
    color: '#53B175',
    fontWeight: '600',
  },
  signupButton: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 25,
  },
  signupButtonText: {
    color: '#FFF9FF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  loginContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  loginText: {
    color: '#181725',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  loginLink: {
    color: '#53B175',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
});
export default styles;
