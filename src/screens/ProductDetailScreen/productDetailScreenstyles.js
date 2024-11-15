import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topQuarter: {
    height: '35%', // Sets top quarter height
    width: '100%',
    backgroundColor: '#f2f3f2',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    margin: 10,
  },
  productImage: {
    alignContent: 'center',
    width: width * 0.4,
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
    marginLeft: width * 0.3,
  },
  productInfoContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  productFavourite: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 24,
    fontFamily: 'Gilroy-bold',
    color: '#181725',
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 16,
    color: '#7C7C7C',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityBox: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    paddingHorizontal: 5,
    paddingVertical: 8,
    borderRadius: 17,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#181725',
    marginLeft: 10,
  },
  detailSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#181725',
  },
  detailVisibleIcon: {
    marginLeft: -25,
  },
  productDetailText: {
    fontSize: 14,
    color: '#7D7D7D',
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    paddingHorizontal: 20,
  },
  reviewSection: {
    borderBottomWidth: 0,
  },

  nutritionWeight: {
    backgroundColor: '#EBEBEB',
    width: 40,
    height: 22,
    fontSize: 14,
    color: '#7C7C7C',
    marginLeft: 200,
    borderRadius: 5,
  },
  rating: {
    flexDirection: 'row',
    marginLeft: 170,
  },
  addButton: {
    width: '90%',
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
