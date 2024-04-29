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
const Register = ({navigation}) => {
  const { signUp } = React.useContext(AuthContext)
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
     username: '',
       password: '',
    },
  })
  const onSubmit = (data) => {
        console.log(data)
        return signUp(data.email, data.username, data.password)
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
            {/* <Text style={styles.body}>Il est temps de créer un compte!</Text> */}
            <Image
              style={styles.image}
              source={require('../../assets/images/bebeNexpress.png')}
            />
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  placeholder='email.'
                  autoCorrect={false}
                  keyboardType='email-address'
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name='email'
              rules={{ required: true }}
            />
            {errors.email && <Text>This is required.</Text>}

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
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
};

export default Register;
