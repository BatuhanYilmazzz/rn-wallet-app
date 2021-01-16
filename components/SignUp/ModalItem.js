import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {FONTS, SIZES} from '../../constants';
const ModalItem = ({item}) => {
  return (
    <TouchableOpacity
      style={{padding: SIZES.padding, flexDirection: 'row'}}
      onPress={() => {
        setSelectedArea(item);
        setModalVisible(false);
      }}>
      <Image
        source={{uri: item.flag}}
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
        }}
      />
      <Text style={{...FONTS.body4}}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ModalItem;

const styles = StyleSheet.create({});
