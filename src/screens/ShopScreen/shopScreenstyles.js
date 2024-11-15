import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {backgroundColor: '#fff'},
  scrollContent: {
    paddingBottom: 100, // Adds padding to the bottom to ensure scrolling reaches the end
  },
  header: {padding: 15, alignItems: 'center'},
  headerImage: {
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  location: {
    fontSize: 18,
    color: '#4C4F4D',
    fontFamily: 'Gilroy',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f3f2',
    padding: 10,
    borderRadius: 15,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Gilroy',
    fontWeight: '600',
  },
  banner: {
    width: '90%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginVertical: 10,
    marginLeft: 20,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});
export default styles;
