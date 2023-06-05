import { View, Text } from 'react-native'
import React from 'react'

import DelBtn from '../../03_Buttons/02_Delete_Button/DeleteButton'
import Input from '../../04_Input/02_InputTracking/InputTracking'
import TrackingButton from '../../03_Buttons/04_TrackingTracken/TrackingTracken'

export default function Tracking(props) {
 
  
  return (
    <View className="">
      <View className="bg-main-color p-2 flex-row justify-between">
          <Text className="text-font-color">Tracking</Text>
          <DelBtn
            MenuOption='Tracking'
            DelComponent={props.DelComponent}
          />
      </View>
      <View className="bg-secondary-color p-2 flex-column">
          <Input
            Text={'Bus'}
          />
          <TrackingButton
            Text={'Bus Tracken'}
          />
      </View>
    </View>
  )
}