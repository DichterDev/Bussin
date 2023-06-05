import { Text, View, TouchableOpacity} from "react-native";
import React, { Component } from 'react';

import { MaterialIcons } from '@expo/vector-icons'; 
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

var size = 0;

export default function DelBtn(props){

  Visabillity = (number) =>{
    if(props.Visabillity === true){
      number = 16;
    }
    else if(props.Visabillity === false){
      number = 2;
    }
    return number;
  }

  return (
    <TouchableOpacity onPress={props.DelComponent}>
      <MaterialIcons name="horizontal-rule" size={Visabillity(size)} color="#EBEBEB" />
    </TouchableOpacity>
  )
}