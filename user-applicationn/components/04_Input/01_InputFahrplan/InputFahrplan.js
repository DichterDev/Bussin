import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class InputFahrplan extends Component {
  render() {
    return (
      <View className="border-b w-48 m-4">
        <TextInput
          placeholder={this.props.Text}
        />
      </View>
    )
  }
}