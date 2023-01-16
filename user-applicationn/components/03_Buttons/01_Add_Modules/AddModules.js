import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react'

export default class AddModules extends Component{
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} className="h-12 w-12 bg-gray-500 mt-2 items-center justify-center">
            <Text>plus</Text>
      </TouchableOpacity>
    )
  }
}