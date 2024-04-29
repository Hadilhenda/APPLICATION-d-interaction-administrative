import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import CitItem from '../CitItem'
import CitService from '../../services/citoyen.service'
import styles from './styles'

const CitList = (props) => {
  const [citoyens, setCitoyens] = useState([])
  const retrieveCitoyens = () => {
    CitService.getAll()
      .then((response) => {
        setCitoyens(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const updateEtat = (id) => {
    console.log('vola ')
  }
  useEffect(() => {
    retrieveCitoyens()
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={citoyens}
        renderItem={({ item }) => (
          <CitItem key={item.id} cit={item} onPress={updateEtat} />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CitList
