import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { MenuProvider } from 'react-native-popup-menu';

import DelBtn from '../../03_Buttons/02_Delete_Button/DeleteButton'

export default class Tracking extends Component {
  render() {
    return (
      <View className="mt-2">
        <View className="bg-red-500 p-2 flex-row justify-between">
            <Text>Tracking</Text>
            <DelBtn 
              onPress={this.props.delComponent}
            />
        </View>
        <View className="bg-blue-500 p-2">
            <Text>Content</Text>
        </View>
      </View>
    )
  }
}