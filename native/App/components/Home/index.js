import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from './colors';
import style from './style';
const Home = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
      }}
    >
      <StatusBar translucent backgroundColor={COLORS.tranparent} />

      {/* Onboarding Image */}
      <Image
        source={require('../../assets/images/ReCi.jpg')}
        style={style.image}
      />

      {/* Indicator container */}

      {/* Title and text container */}
      <View style={{ paddingHorizontal: 20, paddingTop: -10 }}>
        {/* Title container */}
        <View style={style.container}>
          <Text style={style.title}>Bienvenue chez nous </Text>
          <Text>Vous allez choisir l'une de ces fonctionnalités suivantes</Text>
        </View>

        {/* Text container */}
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}
      >
        {/* button */}
        <TouchableOpacity onPress={() => navigation.navigate('ExtraitScreen')}>
          <View style={style.btn}>
            <Text style={{ color: 'white' }}>Telecharger extrait</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ReclamerScreen')}>
          <View style={style.btn1}>
            <Text style={{ color: 'white' }}>Reclamer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default Home;