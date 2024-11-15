import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    paddingLeft: 15,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEdit: {
    flexDirection: 'row',
    marginLeft: 1,
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
    //marginTop: 5,
  },
  editIcon: {
    padding: 5,
    marginLeft: 10,
  },
  menuContainer: {
    //height: 60,
    paddingVertical: 10,
    //backgroundColor: 'red',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  menuText: {
    flex: 1,
    fontSize: 18,
    marginLeft: 45,
    color: '#181725',
    fontFamily: 'Gilroy',
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    //alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: 40,
    paddingVertical: 15,
    backgroundColor: '#f2f3f2',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  logoutIcon: {
    color: '#53B175',
    marginHorizontal: 20,
  },

  logoutText: {
    fontSize: 16,
    color: '#53B175',
    marginLeft: 80,
  },
});
export default styles;
