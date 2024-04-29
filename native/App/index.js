import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthService from './services/auth.service'

import {
  View,
  Text,
  alert,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { AuthContext } from './context'
import {
  SignIn,
  CreateAccount,
  Search,
  Home,
  Details,
  Search2,
  Profile,
  Splash,
  OnBoard,
  Explore,
  RecScreen,
  CitScreen,
  CameraScreens,
  HomeScreen,
  ExtraitScreen,
  ReclamerScreen,
} from './Screens'

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name='OnBoard'
      component={OnBoard}
      options={{ title: 'OnBoard', headerShown: false }}
    />
    <AuthStack.Screen
      name='SignIn'
      component={SignIn}
      options={{ title: 'Sign In', headerShown: false }}
    />

    <AuthStack.Screen
      name='CreateAccount'
      component={CreateAccount}
      options={{ title: 'Create Account' }}
    />
  </AuthStack.Navigator>
)

const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const SearchStack = createStackNavigator()
const ExploreStack = createStackNavigator()

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name='ExtraitScreen'
      component={ExtraitScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name='ReclamerScreen'
      component={ReclamerScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* <HomeStack.Screen
      name='Recommandations'
      component={RecScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name='Citoyens'
      component={CitScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name='Details'
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
        headerShown: false,
      })}
    /> */}
    <HomeStack.Screen
      name='CameraScreens'
      component={CameraScreens}
      options={({ route }) => ({
        
        headerShown: false,
      })}
    />
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name='Search1'
      component={Search}
      options={{
        headerShown: false,
      }}
    />
    <SearchStack.Screen
      name='Search2'
      component={Search2}
      options={{
        headerShown: false,
      }}
    />
  </SearchStack.Navigator>
)
const ExploreStackScreen = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      name='forExplore'
      component={Explore}
      options={{
        headerShown: false,
      }}
    />
  </ExploreStack.Navigator>
)
const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='myProfile'
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'MyHome') {
          return (
            <Ionicons
              name={focused ? 'skull-outline' : 'home-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Search') {
          return (
            <Ionicons
              name={focused ? 'search-outline' : 'search-circle-outline'}
              size={size}
              color={color}
            />
          )
        } else if (route.name === 'Explore') {
          return (
            <Ionicons
              name={focused ? 'logo-xbox' : 'logo-xbox'}
              size={size}
              color={color}
            />
          )
        }
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'tomato',
    })}
  >
    <Tabs.Screen
      name='MyHome'
      component={HomeStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name='Search'
      component={SearchStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name='Explore'
      component={ExploreStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </Tabs.Navigator>
)
function CustomDrawerContent(props) {
  const { signOut } = React.useContext(AuthContext)
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        source={require('./assets/images/BG1.jpg')}
        style={{ padding: 40 }}
      >
        <Image
          source={require('./assets/images/ci.jpg')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            marginBottom: 3,
          }}
        />

        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Roboto-Medium',
            marginBottom: 5,
          }}
        >
          Citoyen
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Roboto-Regular',
              marginRight: 5,
            }}
          >
            280 Extrait
          </Text>
          <FontAwesome5 name='coins' size={14} color='#fff' />
        </View>
      </ImageBackground>
      <DrawerItemList {...props} />

      <TouchableOpacity
        onPress={() => alert('Make a view')}
        style={{ paddingVertical: 15 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='settings-outline' size={22} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}
          >
            Settings
          </Text>
        </View>
      </TouchableOpacity>

      {/* <DrawerItem
        label='Settings'
        onPress={() => alert('Make a view')}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='settings-outline' size={22} color={color} />
          ),
        }}
      /> */}
      <TouchableOpacity
        onPress={() => signOut()}
        style={{ paddingVertical: 15 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='exit-outline' size={22} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}
          >
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
      {/* <DrawerItem
        label='SignOut'
        onPress={() => signOut()}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name='exit-outline' size={22} color={color} />
          ),
        }}
      /> */}
    </DrawerContentScrollView>
  )
}
const Drawer = createDrawerNavigator()
const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName='Home'
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name='Home'
      component={HomeStackScreen}
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='home-outline' size={22} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name='Profile'
      component={ProfileStackScreen}
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name='person-outline' size={22} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
)

const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator>
    {userToken ? (
      <RootStack.Screen
        name='App'
        component={DrawerScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name='Auth'
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
          headerShown: false,
        }}
      />
    )}
  </RootStack.Navigator>
)

export default Lun = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      signIn: (username, password) => {
        setIsLoading(false)
        AuthService.Login(username, password)
          .then((data) => {
            setUserToken(data.accessToken)
          })
          .catch(() => {
            setIsLoading(false)
            setUserToken(null)
            Alert.alert('Error', 'Incorrect user !!', [{ text: 'OK' }])
          })
      },
      signUp: (username, email, password) => {
        AuthService.Register(username, email, password)
          .then(() => {
            console.log('inscrit')
            setIsLoading(false)
            Alert.alert('Succès', 'vous avez déjà créé un compte !', [{ text: 'OK' }])
            // setUserToken('asdf')
           
          })
          .catch(() => {
            setIsLoading(false)
            setUserToken(null)
            Alert.alert('Error', 'error !!', [{ text: 'OK' }])
          })
      },
      signOut: () => {
        setIsLoading(false)
        setUserToken(null)
      },
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <Splash />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
