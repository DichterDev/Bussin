import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class InputFahrplan extends Component {
  render() {
    return (
      <View className="border-b border-l border-grey- w-max">
        <TextInput
          className="ml-2 text-lg"
          placeholder={this.props.Text}
        />
      </View>
    )
  }
}