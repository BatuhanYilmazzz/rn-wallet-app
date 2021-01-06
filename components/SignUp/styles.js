import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images} from '../../constants';

const Styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.padding * 6,
    paddingHorizontal: SIZES.padding * 2,
  },
  headerArrow: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  headerText: {
    marginLeft: SIZES.padding,
    color: COLORS.white,
    ...FONTS.h4,
  },
  logo: {
    marginTop: SIZES.padding * 5,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginTop: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 3,
  },
  fullNameContainer: {
    marginTop: SIZES.padding * 3,
  },
  fullNameText: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },
  fullNameTextInput: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  phoneNumberContainer: {
    marginTop: SIZES.padding * 3,
  },
  PhoneNumberText: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },
  countryCodeButton: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    ...FONTS.body2,
  },
  phoneNumberInput: {
    flex: 1,
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  passwordContainer: {
    marginTop: SIZES.padding * 3,
  },
  passwordInput: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
    flex: 1,
  },
  passwordText: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },
  hidePasswordButton: {
    height: 20,
    width: 20,
  },
  signUpButton: {
    height: 60,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
