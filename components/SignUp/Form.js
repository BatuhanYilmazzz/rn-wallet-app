import React from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import Styles from './styles';

const Form = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(true);
  const [areas, setAreas] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });

        setAreas(areaData);

        if (areaData.length > 0) {
          let defaultData = areaData.filter((a) => a.code == 'US');

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);
  function renderAreaCodesModal() {
    const renderItem = ({item}) => {
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

    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: COLORS.lightGreen,
                borderRadius: SIZES.radius,
              }}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
  return (
    <>
      <View style={Styles.formContainer}>
        {/* Full Name */}
        <View style={Styles.fullNameContainer}>
          <Text style={Styles.fullNameText}>Full Name</Text>
          <TextInput
            style={Styles.fullNameTextInput}
            placeholder="Enter Full Name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        {/* Phone Number */}
        <View style={Styles.phoneNumberContainer}>
          <Text style={Styles.PhoneNumberText}>Phone Number</Text>
          <View style={{flexDirection: 'row'}}>
            {/* Country Code */}
            <TouchableOpacity
              style={Styles.countryCodeButton}
              onPress={() => setModalVisible(true)}>
              <View style={{justifyContent: 'center'}}>
                <Image
                  source={icons.down}
                  style={{
                    width: 10,
                    height: 10,
                    tintColor: COLORS.white,
                  }}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Image
                  source={{uri: selectedArea?.flag}}
                  resizeMode="contain"
                  style={{width: 30, height: 30}}
                />
              </View>
              <View style={{justifyContent: 'center', marginLeft: 5}}>
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                  }}>
                  {selectedArea?.callingCode}
                </Text>
              </View>
            </TouchableOpacity>
            {/** Phone Input */}
            <TextInput
              style={Styles.phoneNumberInput}
              placeholder="Enter Phone Number"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
        </View>
        {/** Password */}
        <View style={Styles.passwordContainer}>
          <Text style={Styles.passwordText}>Password</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={Styles.passwordInput}
              placeholder="Enter Password"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={Styles.hidePasswordButton}
              onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? icons.disable_eye : icons.eye}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.white,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/** Button */}
        <View style={Styles.passwordContainer}>
          <TouchableOpacity
            style={Styles.signUpButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderAreaCodesModal()}
    </>
  );
};

export default Form;
