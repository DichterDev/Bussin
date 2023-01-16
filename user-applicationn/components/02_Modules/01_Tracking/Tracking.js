import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Tracking extends Component {
  render() {
    return (
      <View className="mt-2">
        <View className="bg-red-500 p-2">
            <Text>Tracking</Text>
        </View>
        <View className="bg-blue-500 p-2">
            <Text>Content</Text>
        </View>
      </View>
    )
  }
}