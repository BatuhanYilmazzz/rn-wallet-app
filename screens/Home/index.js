import React from 'react';
import {SafeAreaView} from 'react-native';
import SpecialPromo from '../../components/Home/SpecialPromo';
import {COLORS} from '../../constants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <SpecialPromo />
    </SafeAreaView>
  );
};

export default HomeScreen;
