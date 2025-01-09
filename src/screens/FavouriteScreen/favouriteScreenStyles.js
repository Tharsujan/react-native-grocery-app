import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#7C7C7C',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#FF4B4B',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#53B175',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  retryButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});
export default styles;
