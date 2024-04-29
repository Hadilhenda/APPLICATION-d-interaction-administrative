import React from 'react'
import { Platform } from 'react-native'
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native'
import COLORS from './colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import StyledButton from '../StyledButton'
const { width } = Dimensions.get('screen')
import CitoyenService from '../../services/citoyen.service'

import * as Print from 'expo-print'
import * as MediaLibrary from 'expo-media-library'
import { shareAsync } from 'expo-sharing'
import styles from './style'
import { useForm, Controller } from 'react-hook-form'
const Extrait = ({ navigation }) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      searchId: '',
    },
  })
  const [citoyen, setCitoyen] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    }
  }
  console.log('errors', errors)
  const retrieveCitoyen = (data) => {
    CitoyenService.get(data.searchId)
      .then((response) => {
        setCitoyen(response.data)
        setIsLoading(true)
      })
      .catch((e) => {
        alert('No data found for this id')
      })
  }
  // React.useEffect(() => {
  //   retrieveCitoyen()
  // }, [])
  //contenu html personnalisih kima thb tableau wla kima thb
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Extrait de naissance</title>
        <style>
            body {
                font-size: 16px;
                color: '#A9A9A9';
            }
            h1 {
                text-align: center;
            }
            th{
              text-align: 'right'; 
              border: '1px solid black';
            }
            table{
              text-align: 'center'; 
              border: '1px'; 
              width: '100%';
            }
        </style>
    </head>
    <body>
        <h1>Extrait de Naissance</h1>
        <table style={ textAlign: 'center', width: '100%' }>
          <tr style={{ textAlign: 'center' }}>
            <th style={{ textAlign: 'right' }}>
              
              ولاية
              <br /> معتمدية <br />
              بلدية الدائرة <br />
              البلدية <br /> عمادة
            </th>
            <th style={{ textAlign: 'center' }}>
              <h2>مضمون</h2>
              <h3>من دفاتر الحالة المدنية </h3>
            </th>

            <th style={{ textAlign: 'right', border: '1px solid black' }}>
              
              سنة <br /> عدد الرسم <br /> تصريح حكم
            </th>
          </tr>
          <tr>
            <td></td>
            <td style={{ textAlign: 'center' }}>
              
              <h2> الولادات </h2>
            </td>
          </tr>
        </table>
        
      <table
            style={ textAlign: 'center', border: '1px', width: '100%' }
            className='table table-bordered table-responsive-md table-striped text-center'
          >
            <tr>
              <th style={{ border: '1px solid black', width: '20%' }}>الإسم</th>
              <td style={{ border: '1px solid black' }}>
                ${citoyen.nom}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>اللقب</th>
              <td style={{ border: '1px solid black' }}>
               ${citoyen.prenom}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> تاريخ الولادة</th>
              <td style={{ border: '1px solid black' }}>
                ${citoyen.date_naissance}
              </td>
            </tr>
            <tr>
             
              <th style={{ border: '1px solid black' }}> مكان الولادة</th>
              <td style={{ border: '1px solid black' }}>
               ${citoyen.adress_naissance}
              </td>
            </tr>
              <tr>
              <th style={{ border: '1px solid black' }}>
               
                جنس المولود (ذكى او انثى)
              </th>
              <td style={{ border: '1px solid black' }}>
              ${citoyen.sexe}
               
              </td>
            </tr>
            <tr>
             
              <th style={{ border: '1px solid black' }}>
               
                اسم الأب و لقبه
              </th>
              <td style={{ border: '1px solid black' }}>
              ${citoyen.nom_pere}
            
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> اسم الأم و لقبها</th>
              <td style={{ border: '1px solid black' }}>
                 ${citoyen.nom_mere}
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}>
               
                اسم من قام بالإعلام و لقبه
              </th>
              <td style={{ border: '1px solid black' }}>
               ${citoyen.declaration_accouchement}
                
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> مساعد الولادة</th>
              <td style={{ border: '1px solid black' }}>
               ${citoyen.assistant_accouchement}
               
              </td>
            </tr>
            <tr>
              <th style={{ border: '1px solid black' }}> دفتر العائلة</th>
              <td style={{ border: '1px solid black' }}>
               ${citoyen.livret_familial}
               
              </td>
            </tr>
          </table>
          <div>
            <table
              style={{ textAlign: 'center', border: '1px', width: '100%' }}
              className='table table-bordered table-responsive-md table-striped text-center'
            >
              <tr>
                <th style={{ border: '1px solid black' }}>
                  الملاحظات <br /> <br/>${citoyen.remarque}
                </th>
              </tr>
            </table>
    </body>
    </html>
`

  const printToFile = async () => {
    const { uri } = await Print.printToFileAsync({
      html,
    })
    console.log('File has been saved to:', uri)
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' })
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
      }}
    >
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle='dark-content'
      />
      {/* Header container */}

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Input and sort button container */}
        <Image
          source={require('../../assets/images/telec.png')}
          style={style.image}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                placeholder='Citoyen ID'
                autoCorrect={false}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name='searchId'
            rules={{ required: true }}
          />
          {errors.searchId && <Text>This is required.</Text>}
        </View>
        {isLoading ? (
          <View style={style.btn}>
            <StyledButton
              type='primary'
              content={'Telecharger Extrait'}
              onPress={printToFile}
            />
          </View>
        ) : (
          <View style={style.btn}>
            <StyledButton
              type='primary'
              content={'Chercher ID'}
              onPress={handleSubmit(retrieveCitoyen)}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  btn: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    height: 140,
    borderRadius: 10,
    width: '100%',
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  categoryListText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: COLORS.grey,
  },
  activeCategoryListText: {
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: COLORS.grey },
})
export default Extrait
