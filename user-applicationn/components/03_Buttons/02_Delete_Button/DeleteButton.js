import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react'

import { MaterialIcons } from '@expo/vector-icons'; 
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class DeleteButton extends Component{
  render() {
    return (
      <TouchableOpacity onPress={this.props.DelComponent} class="">
        <MaterialIcons name="horizontal-rule" size={16} color="#EBEBEB" />
      </TouchableOpacity>
    )
  }
}