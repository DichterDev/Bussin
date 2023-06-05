import { Text, View, TextInput, TouchableOpacity, Modal, SafeAreaView, ScrollView} from 'react-native'
import { useState } from 'react';
import React, { Component } from 'react'

import {useModalStore} from '../../../stores/ModalStore'

import data from '../../02_Modules/01_Tracking/01_Items/data.json'
import ItemTemplate from '../../02_Modules/01_Tracking/01_Items/ItemTemplate'

export default function InputTracking(props) {
  const ModalVisible = useModalStore((state) => state.ModalVisible)
  const setModalVisible = useModalStore((state) => state.setModalVisible)

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={ModalVisible}>
        <View className="bg-font-color h-full">
          <SafeAreaView className="flex-row  bg-main-color flex justify-center items-center">
            <TextInput
              className="bg-font-color rounded-sm p-2 w-2/3 h-8 m-2"
              placeholder="Bus suchen..."
            />
            <TouchableOpacity
              className="w-max justify-end"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-font-color">Abbrechen</Text>
            </TouchableOpacity>
          </SafeAreaView>
          <ScrollView>
            {Object.values(data).map((id) => (
              <ItemTemplate
                id={id['id']}
                key={id['id']}
                Icon={id['typeStr']}
                nummer={id['nummer']}
                richtung={id['richtung']} 
                disabled={false}      
              />
            ))}
          </ScrollView>
        </View>
      </Modal>
      <View className="bg-font-color rounded-lg p-1 items-center">
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-lg">{props.Text}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}