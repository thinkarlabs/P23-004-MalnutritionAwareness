import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AppHeader from '../../shared/components/appHeader'
import { trackHealthStyles } from './styles'
import { TopTabNavigator } from '../../navigators/TopTabNavigator'

const Track = () => {
  return (
    <SafeAreaView style={trackHealthStyles.screenContainer}>
      <AppHeader 
        title={'Aadarshini'}
      />
      <TopTabNavigator />
    </SafeAreaView>
  )
}

export default Track