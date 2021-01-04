import React from 'react';
import {Text, TextInput, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {COLORS, FONTS, icons, images} from '../../constants';
import Styles from './styles';

const Form = () => {
  const [showPassword, setShowPassword] = React.useState(true);
  return (
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
            onPress={() => console.log('Show Modal')}>
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
                source={images.usFlag}
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
                US+1
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
        <TouchableOpacity style={Styles.signUpButton}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
