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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  closeModalButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    marginTop: 20,
    paddingBottom: 20,
  },
  modalProductImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  modalProductInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  modalProductName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#181725',
    marginBottom: 4,
  },
  modalVendorName: {
    fontSize: 14,
    color: '#7C7C7C',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starIcon: {
    marginRight: 2,
  },
  ratingCount: {
    fontSize: 14,
    color: '#7C7C7C',
    marginLeft: 4,
  },
  vegIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vegText: {
    fontSize: 14,
    color: '#53B175',
    marginLeft: 4,
  },
  modalDivider: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginVertical: 15,
  },
  modalPriceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalAmountLabel: {
    fontSize: 16,
    color: '#181725',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#181725',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F3F2',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  quantityButton: {
    padding: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 15,
    color: '#181725',
  },
  modalAddToCartButton: {
    backgroundColor: '#53B175',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  modalAddToCartText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default styles;
