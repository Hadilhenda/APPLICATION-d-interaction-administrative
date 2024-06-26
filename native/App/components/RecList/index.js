import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import RecItem from '../RecItem'
import RecService from '../../services/recommandation.service'
import styles from './styles'

const RecList = (props) => {
  const [recommandations, setRecommandations] = useState([])
  const retrieveRecommandations = () => {
    RecService.getAll()
      .then((response) => {
        setRecommandations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const updateEtat = (id) => {
    console.log('vola ')
  }
  useEffect(() => {
    retrieveRecommandations()
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={recommandations}
        renderItem={({ item }) => (
          <RecItem key={item.id} rec={item} onPress={updateEtat} />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default RecList
