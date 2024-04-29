import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ProfileView from './components/Profil'
import { AuthContext } from './context'
import CarsList from './components/CarsList'
import Login from './components/LoginForm'
import Register from './components/RegisterForm'
import OnBoarding from './components/OnBoarding'
import RecList from './components/RecList'
import CitList from './components/CitList'
import CameraScreen from './components/Camera'
import Home from './components/Home'
import Extrait from './components/Extrait'
import Reclamer from './components/Reclamer'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
})

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
)

export const HomeScreen = ({ navigation }) => (
  <ScreenContainer>
    <Home navigation={navigation}/>
  </ScreenContainer>
)

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
)
export const RecScreen = ({ navigation }) => (
  <ScreenContainer>
    <RecList />
  </ScreenContainer>
)
export const ExtraitScreen = ({ navigation }) => (
  <ScreenContainer>
    <Extrait />
  </ScreenContainer>
)
export const ReclamerScreen = ({ navigation }) => (
  <ScreenContainer>
    <Reclamer navigation={navigation} />
  </ScreenContainer>
)
export const CameraScreens = ({ navigation }) => (
  <ScreenContainer>
    <CameraScreen />
  </ScreenContainer>
)
export const CitScreen = ({ navigation }) => (
  <ScreenContainer>
    <CitList />
  </ScreenContainer>
)
export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title='Search 2' onPress={() => navigation.push('Search2')} />
    <Button
      title='React Native School'
      onPress={() => {
        navigation.navigate('Home', {
          screen: 'Details',
          params: { name: 'React Native School' },
        })
      }}
    />
  </ScreenContainer>
)

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
)
export const Explore = () => (
  <ScreenContainer>
    <CarsList />
  </ScreenContainer>
)
// export const Profile = ({ navigation }) => {
//   const { signOut } = React.useContext(AuthContext)
//   return (
//     <ScreenContainer>
//       <Text>Profile Screen</Text>
//       <Button title='Drawer' onPress={() => navigation.toggleDrawer()} />
//       <Button title='Sign Out' onPress={() => signOut()} />
//     </ScreenContainer>
//   )
// }
export const Profile = () => {
  return (
    <ScreenContainer>
      <ProfileView />
    </ScreenContainer>
  )
}
export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
)

export const OnBoard = ({ navigation }) => (
  <ScreenContainer>
    <OnBoarding navigation={navigation} />
  </ScreenContainer>
)
export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext)

  return (
    <ScreenContainer>
      {/* <Text>Sign In Screen</Text>
      <Button title='Sign In' onPress={() => signIn()} />
      <Button
        title='Create Account'
        onPress={() => navigation.push('CreateAccount')}
      /> */}
      <Login navigation={navigation} />
    </ScreenContainer>
  )
}

export const CreateAccount = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext)

  return (
    <ScreenContainer>
      <Register navigation={navigation} />
    </ScreenContainer>
  )
}
