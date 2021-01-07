import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';
const Styles = StyleSheet.create({
  tabBarOption: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  tabBarCustomButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lime,
  },
});

export default Styles;
