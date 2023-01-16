import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react'

export default class DeleteButton extends Component{
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} className="bg-lime-300">
            <Text>minus</Text>
      </TouchableOpacity>
    )
  }
}