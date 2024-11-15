import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
    color: '#181725',
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#E2E2E2', // Border color
    marginTop: 20, // 30px space below header
    width: '100%',
  },
  listContainer: {
    flex: 1, // Ensures the list container takes up remaining space
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  addToCartButton: {
    marginTop: 20,
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 19,
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 100,
  },
  addToCartButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
export default styles;
