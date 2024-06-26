import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'transparent',
     
    },
    contentContainer: {
      paddingHorizontal: 30,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 35,
      textAlign: 'center',
      color: '#353147',
    },
    body: {
      paddingTop: 20,
      fontSize: 16,
      lineHeight: 23,
      fontWeight: '400',
      textAlign: 'center',
      color: '#353147',
    },
    buttonsText: {
      fontWeight: '500',
      color: '#353147',
    },
    button1: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ffffff70',
      padding: 16,
      borderRadius: 6,
    },
    button2: {
      flex: 1,
      alignItems: 'center',
      padding: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 16,
      backgroundColor: '#DFE3E630',
      marginTop: 40,
    },
  });
  export default styles