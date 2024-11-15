import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Section = ({title, children}) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.productsContainer}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  section: {marginTop: 20},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  sectionTitle: {fontSize: 24, fontWeight: '600', fontFamily: 'Gilroy'},
  seeAll: {
    fontSize: 16,
    color: '#53B175',
    fontWeight: '600',
    fontFamily: 'Gilroy',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    //marginHorizontal: 20,
  },
});

export default Section;
