import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

import { useBusIdStore } from '../../../../stores/BusIdStore'
import { useModalStore } from '../../../../stores/ModalStore'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Haltestelle from './data.json'

var icon;


export default function ItemTemplate(props) {
    const BusId = useBusIdStore((state) => state.BusId)
    const setBusId = useBusIdStore((state) => state.setBusId)

    const setModalVisible = useModalStore((state) => state.setModalVisible)

    if(props.Icon === "Bus"){
        icon = "bus";
    }else if(props.Icon === "Zug"){
        icon = "train";
    }
    
    function getData(){
        setBusId(props.id)
        setModalVisible(false);
    }

  return (
    <View className="border-b-0.5">
        <TouchableOpacity disabled={props.disabled} className="py-2 flex-row" onPress={() => getData()}>
            <View className="px-2">
                <MaterialCommunityIcons name={icon} size={32} color="black" />
            </View>
            <View> 
                <Text>{props.nummer}</Text>
                <Text>{props.richtung}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}