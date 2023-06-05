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
      <View>
        <View className="bg-main-color p-2 flex-row justify-between">
            <Text className="text-font-color">Fahrplan</Text>
            <DelBtn
              Visibillity={this.props.Visibillity}
              MenuOption='Fahrplan'
              DelComponent={this.props.DelComponent}
            />
        </View>
        <View className="bg-secondary-color flex-row justify-between">
          <View className="flex-column items-center">
            <View className="p-2"> 
                <MaterialCommunityIcons name="alpha-a-circle-outline" size={32} color="black" />
            </View>
            <View className=""> 
              <FontAwesome name="long-arrow-down" size={32} color="black" />
            </View>
            <View className="p-2">
              <MaterialCommunityIcons name="alpha-b-circle-outline" size={32} color="black" /> 
            </View>
          </View>
          <View className="w-2/4 justify-evenly">
              <Input
                Text="Start"
              /> 
              <Input
                Text="Ziel"
              />
          </View>
          <View className="flex-column justify-end">
              <Suche 
                Text="Suche"        
              />
          </View>
        </View>
      </View>
    )
  }
}