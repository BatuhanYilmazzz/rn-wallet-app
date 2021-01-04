import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {icons} from '../../constants';
import Styles from './styles';

const Header = () => {
  return (
    <TouchableOpacity
      style={Styles.headerContainer}
      onPress={() => console.log('SignUp')}>
      <Image
        source={icons.back}
        resizeMode="contain"
        style={Styles.headerArrow}
      />
      <Text style={Styles.headerText}>Sign Up</Text>
    </TouchableOpacity>
  );
};

export default Header;
