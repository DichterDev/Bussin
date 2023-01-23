import { Text, View } from 'react-native'
import React, { Component } from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import DelBtn from '../../03_Buttons/02_Delete_Button/DeleteButton'
import Input from '../../04_Input/01_InputFahrplan/InputFahrplan'
import Suche from '../../03_Buttons/03_FahrplanSuchen/FahrplanSuchen'

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
          <View className="flex-row justify-left bg-secondary-color p-2 content-evenly">
            <View className="items-center my-4 absolute top-2">
              <MaterialCommunityIcons name="alpha-a-circle-outline" size={32} color="black" />
              <FontAwesome name="long-arrow-down" size={32} color="black" />
              <MaterialCommunityIcons name="alpha-b-circle-outline" size={32} color="black" />
            </View>
            <View className="mx-4 absolute">
              <Input
                Text="Start"
              />
              <Input
                Text="Ziel"
              />
            </View>
            <View className="mt-20 ml-4 absolute">
              <Suche 
                Text="Suche"        
              />
            </View>
          </View>
      </View>
    )
  }
}