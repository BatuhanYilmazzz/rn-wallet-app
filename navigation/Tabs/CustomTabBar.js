import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {COLORS} from '../../constants';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}></View>
        <BottomTabBar {...props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props} />;
  }
};

export default CustomTabBar;

const styles = StyleSheet.create({});
