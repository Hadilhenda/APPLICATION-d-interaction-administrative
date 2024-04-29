import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'
const CitItem = (props) => {
  const { nom, prenom, date_naissance, adress_naissance } = props.cit
  return (
    <TouchableOpacity>
      <View style={styles.carContainer}>
        <View style={styles.card} />

        <View style={styles.titles}>
          <Text style={styles.title}>{nom}</Text>
          <Text style={styles.subtitle}>
            {date_naissance} <Text style={styles.subtitleCTA}>{prenom}</Text>
          </Text>
          <Text style={styles.title}>{adress_naissance}</Text>
        </View>

        <View style={styles.ButtonsContainer}>
          <StyledButton
            type='primary'
            content={'Modifier'}
            onPress={props.onPress}
          />
          <StyledButton
            type='secondary'
            content={'Supprimer'}
            onPress={() => {
              console.warn('Supprimer')
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CitItem
