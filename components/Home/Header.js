import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS, icons} from '../../constants';

const Header = () => {
  return (
    <View style={{flexDirection: 'row', marginVertical: SIZES.padding * 2}}>
      <View style={{flex: 1}}>
        <Text style={{...FONTS.h1}}> Hello!</Text>
        <Text style={{...FONTS.body2, color: COLORS.gray}}>Batuhan</Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.gray,
          }}>
          <Image
            source={icons.bell}
            style={{width: 20, height: 20, tintColor: COLORS.secondary}}
          />
          <View
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              height: 10,
              width: 10,
              backgroundColor: COLORS.red,
              borderRadius: 5,
            }}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
