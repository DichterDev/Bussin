import { Text, View, TextInput, TouchableOpacity, Modal, SafeAreaView} from 'react-native'
import { useState } from 'react';
import React, { Component } from 'react'

export default function InputFahrplan(props) {
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View className="bg-font-color h-full">
          <SafeAreaView className="flex-row bg-main-color">
            <TextInput
              className="bg-font-color rounded-sm p-2 w-2/3 h-8 m-2"
              placeholder="Haltestelle eingeben..."

            />
            <TouchableOpacity
              className="w-max m-4 justify-end"
              onPress={() => setModalVisible(!modalVisible)}>
              <Text className="text-font-color">Abbrechen</Text>
            </TouchableOpacity>
          </SafeAreaView>
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