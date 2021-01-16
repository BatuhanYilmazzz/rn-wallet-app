import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS, images, specialPromoData} from '../../constants';
const PromoHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: SIZES.padding,
      }}>
      <View style={{flex: 1}}>
        <Text style={{...FONTS.h3}}>Special Promos</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('View All')}>
        <Text style={{color: COLORS.gray, ...FONTS.body4}}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoHeader;

const styles = StyleSheet.create({});
