import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class AddModules extends Component{
  render() {
    return (
      <View className="h-12 w-12 bg-gray-500 mt-2 items-center justify-center">
            <Menu>
                <MenuTrigger text='Select'/>
                    <MenuOptions>
                      <MenuOption onSelect={() => this.props.AddTracking} text='Tracking' />
                      <MenuOption onSelect={() => this.props.AddFahrplan} text='Fahrplan' />
                    </MenuOptions>
            </Menu>
      </View>
    )
  }
}