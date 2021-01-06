import React from 'react';
import {Image, Text, View} from 'react-native';
import Styles from './styles';
import {images} from '../../constants';
const Logo = () => {
  return (
    <View style={Styles.logo}>
      <Image
        source={images.wallieLogo}
        resizeMode="contain"
        style={{width: '60%'}}
      />
    </View>
  );
};

export default Logo;
