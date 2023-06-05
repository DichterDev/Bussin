import { Text, View, ScrollView, Button, SafeAreaView} from 'react-native'
import { useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import FahplranModule from '../../02_Modules/02_Fahrplan/Fahrplan'
import Slide from '../../05_Slide/01_Slide/Slide'

export default function Fahrplan() {

  return (
    <>
      <SafeAreaView className="bg-main-color items-center mb-2">
        <Text className="text-font-color text-lg font-bold">Bussin</Text>
      </SafeAreaView>
      <FahplranModule
        Visibillity={true}
      />
      <Slide
        PointOne="Orte"
        PointTwo="Von-Nach"
        PointThree="Touch"
        PointFour="Karte"
      />
      <ScrollView className="">
      </ScrollView>
    </>
  );
}
