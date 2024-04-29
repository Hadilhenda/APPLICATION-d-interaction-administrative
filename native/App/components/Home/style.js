import { StyleSheet } from 'react-native'
import COLORS from './colors'
import { Dimensions } from 'react-native'
const style = StyleSheet.create({
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  btn: {
    height: 50,
    marginHorizontal: 40,
    marginTop: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    height: 50,
    marginTop: 30,
    marginHorizontal: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 32, fontWeight: 'bold' },
  container: { justifyContent: 'center', alignItems: 'center' },
  textStyle: { fontSize: 16, color: COLORS.grey },
})
export default style
