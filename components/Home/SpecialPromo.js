import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES, FONTS, images, specialPromoData} from '../../constants';
import Banner from './Banner';
import Features from './Features';
import Header from './Header';
import PromoHeader from './PromoHeader';

const SpecialPromo = () => {
  function HeaderComponents() {
    return (
      <View>
        <Header />
        <Banner />
        <Features />
        <PromoHeader />
      </View>
    );
  }

  function renderItem({item}) {
    return (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}>
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.primary,
          }}>
          <Image
            source={images.promoBanner}
            resizeMode="cover"
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{...FONTS.h4}}>{item.title}</Text>
          <Text style={{...FONTS.body4}}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      ListHeaderComponent={HeaderComponents}
      contentContainerStyle={{paddingHorizontal: SIZES.padding * 3}}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={specialPromoData}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SpecialPromo;

const styles = StyleSheet.create({});
