import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';

var icon;

export default function ItemTemplate(props) {

    if(props.Icon === "Haltestelle"){
        icon = "bus";
    }else if(props.Icon === "Bahnhof"){
        icon = "train";
    }else if(props.Icon === "Adresse"){
        icon = "mailbox";
    }else if(props.Icon === "Undefined"){
        icon = "alert-circle-outline";
    }

  return (
    <View className="border-b-0.5">
        <TouchableOpacity className="py-2 flex-row">
            <View className="px-2">
                <MaterialCommunityIcons name={icon} size={32} color="black" />
            </View>
            <View> 
                <Text>{props.Haltestelle}</Text>
                <Text>{props.Entfernung}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}