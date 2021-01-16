import React from 'react';
import {Image, View} from 'react-native';

import {images} from '../../constants';

const Banner = () => {
  return (
    <View
      style={{
        height: 120,
        borderRadius: 20,
      }}>
      <Image
        source={images.banner}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default Banner;
