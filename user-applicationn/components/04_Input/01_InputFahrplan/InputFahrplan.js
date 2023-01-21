import { Text, View, Input } from 'react-native'
import React, { Component } from 'react'

export default class InputFahrplan extends Component {
  render() {
    return (
      <View className="border-b w-32">
        <Input placeholder={this.props.Text}/>
      </View>
    )
  }
}