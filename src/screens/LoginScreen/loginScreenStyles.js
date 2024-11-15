import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  safeareaView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,

    paddingHorizontal: 20,
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
    marginleft: 25,
    // marginBottom: 10,
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
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginBottom: 30,
    marginLeft: -20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#181725',
    marginVertical: 10,
    fontSize: 14,
    fontFamily: 'Gilroy-medium',
    marginBottom: 30,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 19,
    alignItems: 'center',
    marginBottom: 25,
  },
  loginButtonText: {
    color: '#FFF9FF',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  signupContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  signupText: {
    color: '#181725',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  signupLink: {
    color: '#53B175',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
});
export default styles;
