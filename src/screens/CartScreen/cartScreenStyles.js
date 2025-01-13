import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Gilroy-Bold',
    textAlign: 'center',
    marginVertical: 20,
    paddingBottom: 20,
    color: '#181725',
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#E2E2E2',
    width: '100%',
  },
  listContainer: {
    flex: 1,
  },

  list: {
    paddingHorizontal: 20,
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
  checkoutContainer: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    //backgroundColor: 'red',
    marginBottom: 100,
  },
  checkoutButton: {
    backgroundColor: '#53B175',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  checkoutText: {
    color: '#FCFCFC',
    fontSize: 18,
    fontWeight: '600',
    paddingLeft: 90,
    fontFamily: 'Gilroy',
  },
  totalPrice: {
    color: '#FCFCFC',
    backgroundColor: '#489E67',
    borderRadius: 4,
    padding: 5,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
});
export default styles;
