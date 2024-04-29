import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native'
import { AuthContext } from '../../context'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import authService from '../../services/auth.service'
import { alert, TouchableOpacity, ImageBackground, Image } from 'react-native'
export default function ProfileView() {
  const { signOut } = React.useContext(AuthContext)
  const [user, setUser] = useState()
  const retrieveUser = () => {
    authService
      .GetCurrentUser()
      .then((data) => {
        setUser(JSON.parse(data))
        console.log('CurrentUserId :', user.id)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    retrieveUser()
  }, [])
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/BG1.jpg')}
        style={{
          padding: 50,
          height: 400,
          width: 400,
          marginBottom: 10,
        }}
      >
        <Image
          source={require('../../assets/images/handshake.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 90,
            marginBottom: 10,
            marginTop: 250,
            marginLeft: -20,
          }}
        />
      </ImageBackground>
      {user ? (
        <View>
          <Text>{user.username}</Text>
          <Text>{user.id}</Text>
          <Text>{user.cin}</Text>
          <Text>Email : {user.email}</Text>
          <Text>Télèphone : {user.tel}</Text>
          <Text>Roles : {user.roles}</Text>

          <Button title='Sign Out' onPress={() => signOut()} />
        </View>
      ) : (
        <View>
          <Text>Please Check your Code...</Text>
        </View>
      )}
    </View>
  )
}
