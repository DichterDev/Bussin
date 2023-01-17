import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { MenuProvider } from 'react-native-popup-menu';

import DelBtn from '../../03_Buttons/02_Delete_Button/DeleteButton'

export default class Tracking extends Component {
  render() {
    return (
      <View className="mt-2">
        <View className="bg-main-color p-2 flex-row justify-between">
            <Text className="text-font-color">Tracking</Text>
            <DelBtn
              MenuOption='Tracking'
              DelComponent={this.props.DelComponent}
            />
        </View>
        <View className="bg-secondary-color p-2">
            <Text>Content</Text>
        </View>
      </View>
    )
  }
}