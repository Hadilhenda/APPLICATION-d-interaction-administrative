import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'
const RecItem = (props) => {
  const { titre, description, domaine, etat } = props.rec
  return (
    <TouchableOpacity>
      <View style={styles.carContainer}>
        <View style={styles.card} />

        <View style={styles.titles}>
          <Text style={styles.title}>{titre}</Text>
          <Text style={styles.subtitle}>
            {domaine} <Text style={styles.subtitleCTA}>{description}</Text>
          </Text>
          <Text style={styles.title}>{etat}</Text>
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

export default RecItem
