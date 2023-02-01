import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class FahrplanSuchen extends Component {
  render() {
    return (
      <TouchableOpacity className="bg-main-color p-2 rounded-lg" onClick={this.props.onPress}>
        <Text className="text-font-color">{this.props.Text}</Text>
      </TouchableOpacity>
    )
  }
}