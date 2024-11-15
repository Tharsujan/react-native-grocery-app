import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Gilroy-bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f3f2',
    padding: 10,
    borderRadius: 15,
    marginLeft: 10,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: 'Gilroy',
    fontWeight: '600',
    color: '#7C7C7C',
  },

  gridContainer: {
    justifyContent: 'space-between',

    paddingBottom: 100,
    paddingTop: 10,
  },
});
export default styles;
