import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {SIZES, FONTS, featuresData} from '../../constants';

const Features = () => {
  const Header = () => (
    <View style={{marginBottom: SIZES.padding * 2}}>
      <Text style={{...FONTS.h3}}>Features</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        marginBottom: SIZES.padding * 2,
        width: 60,
        alignItems: 'center',
      }}
      onPress={() => console.log(item.description)}>
      <View
        style={{
          height: 50,
          width: 50,
          marginBottom: 5,
          borderRadius: 20,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            height: 20,
            width: 20,
            tintColor: item.color,
          }}
        />
      </View>
      <Text style={{textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4}}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ListHeaderComponent={Header}
      data={featuresData}
      numColumns={4}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      style={{marginTop: SIZES.padding * 2}}
    />
  );
};

export default Features;
