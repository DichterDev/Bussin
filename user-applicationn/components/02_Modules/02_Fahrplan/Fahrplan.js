import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import DelBtn from '../../03_Buttons/02_Delete_Button/DeleteButton'
import Input from '../../04_Input/01_InputFahrplan/InputFahrplan'

export default class Fahrplan extends Component {
  render() {
    return (
      <View className="mt-2">
        <View className="bg-main-color p-2 flex-row justify-between">
            <Text className="text-font-color">Fahrplan</Text>
            <DelBtn 
              MenuOption='Fahrplan'
              DelComponent={this.props.DelComponent}
            />
        </View>
        <View className="flex-row bg-secondary-color p-2 content-evenly">
          <View className="items-center">
            <MaterialCommunityIcons name="alpha-a-circle-outline" size={24} color="black" />
            <FontAwesome name="long-arrow-down" size={24} color="black" />
            <MaterialCommunityIcons name="alpha-b-circle-outline" size={24} color="black" />
          </View>
          <View>
            <Input 
              Text="Start eingeben..."
            />
            <Input 
              Text="Ziel eingeben..."
            />
          </View>
        </View>
      </View>
    )
  }
}