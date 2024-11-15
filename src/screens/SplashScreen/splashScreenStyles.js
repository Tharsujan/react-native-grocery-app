import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53B175', // Green background
  },
  textContainer: {
    marginLeft: 20,
    alignItems: 'center',
    width: 195,
  },
  icon: {
    width: 54,
    height: 63,
  },
  image: {
    width: 195,
    height: 45,
  },

  tagline: {
    width: 195,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 5.5,
    color: '#FFFFFF',
    paddingBottom: 10,
    fontFamily: 'Gilroy-Medium',
  },
});

export default styles;
