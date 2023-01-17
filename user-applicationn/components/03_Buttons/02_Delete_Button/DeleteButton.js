import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react'

import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class DeleteButton extends Component{
  render() {
    return (
      <TouchableOpacity onPress={this.props.DelComponent} className="bg-lime-300">
            <Text>Minus</Text>
      </TouchableOpacity>
    )
  }
}