import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for better text contrast
    width: '100%',
    paddingHorizontal: 25,
  },
  icon: {
    width: 48,
    height: 56,
    marginTop: 400,
    marginBottom: 20,
  },
  welcomeText: {
    fontFamily: 'Gilroy',
    fontSize: 48,
    fontWeight: '600',
    lineHeight: 54,
    textAlign: 'center',
    color: '#FFFFFF', // White color or as per your design,
    marginBottom: 10,
  },
  welcomeSubText: {
    fontFamily: 'Gilroy', // Ensure this font is linked and loaded in your project
    fontSize: 48,
    fontWeight: '600',
    lineHeight: 54,
    textAlign: 'center',
    color: '#FFFFFF', // White color or as per your design,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    color: '#FCFCFC',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonWrapper: {
    width: '100%', // Ensures wrapper takes full width
    alignItems: 'center', // Centers the button horizontally
  },
  getStartedButton: {
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width * 0.9,
    height: height * 0.08,
    paddingVertical: 16,
    paddingHorizontal: 110,
    borderRadius: 19,
  },
  getStartedButtonText: {
    fontSize: 18,
    TextAlign: 'center',
    fontFamily: 'Gilroy',
    color: '#FFF9FF',
    fontWeight: '600',
  },
});

export default styles;
