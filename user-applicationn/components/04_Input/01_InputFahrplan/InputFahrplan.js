import { Text, View, TextInput, TouchableOpacity, Modal, SafeAreaView, ScrollView} from 'react-native'
import { useState } from 'react';
import React, { Component } from 'react'

import data from '../../02_Modules/02_Fahrplan/01_Items/data.json'
import ItemTemplate from '../../02_Modules/02_Fahrplan/01_Items/ItemTemplate'

export default function InputFahrplan(props) {
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View className="bg-font-color h-full">
          <SafeAreaView className="flex-row  bg-main-color flex justify-center items-center">
            <TextInput
              className="bg-font-color rounded-sm p-2 w-2/3 h-8 m-2"
              placeholder="Haltestelle eingeben..."
            />
            <TouchableOpacity
              className="w-max justify-end"
              onPress={() => setModalVisible(!modalVisible)}>
              <Text className="text-font-color">Abbrechen</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <ScrollView>
            {Object.values(data).map((id) => (
              <ItemTemplate
                key={id['id']}
                Icon={id['typeStr']}
                Name={id['name']}
                Entfernung={id['distance'] + ' km'}            
              />
            ))}
          </ScrollView>
        </View>
      </Modal>
      <View className="border-b border-l p-1">
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text className="text-lg">{props.Text}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}