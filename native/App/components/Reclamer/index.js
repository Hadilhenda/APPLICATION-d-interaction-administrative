import React from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native'
import FormData from 'form-data'
import * as ImagePicker from 'expo-image-picker'
import { useForm, Controller } from 'react-hook-form'
import styles from './style'
import * as Animatable from 'react-native-animatable'
import RecService from '../../services/reclamation.service'
import axios from 'axios'
import { AxiosRequestConfig } from 'axios'

export default function Reclamer({ navigation }) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      titre: '',
      image: '',
      localisation: '',
    },
  })
  const [image, setImage] = React.useState(null)

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    }
  }
  const onSubmit = (data) => {
    data.image = image
    RecService.create(data)
      .then((response) => {
        alert('Reclamation créée avec succès!')
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const pickCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      let path = result.uri
      console.log(path)
      if (!result.fileName) result.fileName = path.split('/').pop()
      setImage(result.fileName)
      const formData = new FormData()
      formData.append('img', {
        uri: path,
        type: 'image/jpeg',
        name: result.fileName,
      })
      console.log(formData)
      var config = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      }

      fetch(`http://192.168.14.117:8088/api/reclamations/upload`, config)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }
  }
  console.log('errors', errors)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <Animatable.Text
              style={styles.loginTitleText}
              animation='fadeInUp'
              delay={800}
            >
              Reclamer
            </Animatable.Text>
            <View style={styles.hr}></View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Image</Text>

              <TouchableOpacity
                // onPress={() => navigation.navigate('CameraScreens')}
                onPress={pickCamera}
              >
                <Image
                  source={require('./image/camera.png')}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Titre</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder='titre'
                    keyboardType='default'
                    textContentType='name'
                  />
                )}
                name='titre'
                rules={{ required: true }}
              />
              {errors.titre && <Text> Input Required</Text>}
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Localisation</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='localisation'
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    textContentType='name'
                  />
                )}
                name='localisation'
                rules={{ required: true }}
              />
              {errors.localisation && <Text> Input Required</Text>}
            </View>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.loginButtonText}>Reclamer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
