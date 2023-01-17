import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react'
import { AntDesign } from '@expo/vector-icons'; 

import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class AddModules extends Component{
  render() {
    return (
      <View className="h-12 w-12 bg-secondary-color mt-2 items-center justify-center">
          <Menu>
            <MenuTrigger children={<AntDesign name="plus" size={32} color="black" />}/>
              <MenuOptions>
                <MenuOption onSelect={this.props.AddTracking} text='Tracking' disabled={this.props.disabledTracking}/>
                <MenuOption onSelect={this.props.AddFahrplan} text='Fahrplan' disabled={this.props.disabledFahrplan}/>
              </MenuOptions>
          </Menu>
      </View>
    )
  }
}