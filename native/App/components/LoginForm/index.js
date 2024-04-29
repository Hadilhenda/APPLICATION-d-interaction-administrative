// import React from 'react'
// import {
//   Text,
//   View,
//   TextInput,
//   Button,
//   Alert,
//   StyleSheet,
//   Image,
// } from 'react-native'
// import { useForm, Controller } from 'react-hook-form'
// import Constants from 'expo-constants'
// import { AuthContext } from '../../context'
// export default function Login({ navigation }) {
//   const { signIn } = React.useContext(AuthContext)
//   const {
//     register,
//     setValue,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       username: '',
//       password: '',
//     },
//   })
//   const onSubmit = (data) => {
//     console.log(data)
//     return signIn(data.username, data.password)
//   }

//   const onChange = (arg) => {
//     return {
//       value: arg.nativeEvent.text,
//     }
//   }

//   console.log('errors', errors)

//   return (
//     <View style={styles.container}>
//       <Image
//         style={styles.image}
//         source={require('../../assets/images/login.png')}
//       />

//       <Controller
//         control={control}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             style={styles.input}
//             onBlur={onBlur}
//             placeholder='Username.'
//             placeholderTextColor='#003f5c'
//             onChangeText={(value) => onChange(value)}
//             value={value}
//           />
//         )}
//         name='username'
//         rules={{ required: true }}
//       />
//       {errors.username && <Text>This is required.</Text>}

//       <Controller
//         control={control}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             style={styles.input}
//             onBlur={onBlur}
//             placeholder='Password.'
//             placeholderTextColor='#003f5c'
//             onChangeText={(value) => onChange(value)}
//             value={value}
//           />
//         )}
//         name='password'
//         rules={{ required: true }}
//       />
//       {errors.password && <Text>This is required.</Text>}
//       <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title='login'
//           onPress={handleSubmit(onSubmit)}
//         />
//       </View>
//       <View style={styles.button}>
//         <Button
//           style={styles.buttonInner}
//           color
//           title='Register'
//           onPress={() => navigation.push('CreateAccount')}
//         />
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   label: {
//     color: '#FFC0CB',
//     margin: 5,
//     marginLeft: 0,
//   },
//   image: {
//     marginBottom: 40,
//     width: 350,
//     height: 200,
//   },
//   button: {
//     width: '50%',
//     borderRadius: 25,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
//     backgroundColor: '#ff1493',
//   },
//   container: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     padding: 8,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   input: {
//     backgroundColor: '#ffc0cb',
//     borderRadius: 30,
//     width: '70%',
//     height: 45,
//     marginBottom: 20,
//     alignItems: 'center',
//     marginLeft: 20,
//   },
// })

import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import styles from './style'
import { useForm, Controller } from 'react-hook-form'

import { AuthContext } from '../../context'
const Login = ({navigation}) => {
  const { signIn } = React.useContext(AuthContext)
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  })
  const onSubmit = (data) => {
    console.log(data)
    return signIn(data.username, data.password)
  }

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    }
  }

  console.log('errors', errors)

  const {height} = Dimensions.get('window');
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Citoyen.TN</Text>
            <Image
              style={styles.image}
              source={require('../../assets/images/bebeexpress.png')}
            />

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  placeholder='Username.'
                  autoCorrect={false}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name='username'
              rules={{ required: true }}
            />
            {errors.username && <Text>This is required.</Text>}
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  autoCorrect={false}
                  secureTextEntry={true}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name='password'
              rules={{ required: true }}
            />
            {errors.password && <Text>This is required.</Text>}

            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
};

export default Login;
