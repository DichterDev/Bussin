import { Text, View, ScrollView, Button, SafeAreaView} from 'react-native'
import { useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import FahplranModule from '../../02_Modules/02_Fahrplan/Fahrplan'
import Slide from '../../05_Slide/01_Slide/Slide'

import Orte from '../03_Fahrplan/01_Screens/Orte'
import VonNach from '../03_Fahrplan/01_Screens/Von-Nach'
import Touch from '../03_Fahrplan/01_Screens/Touch'
import Karte from '../03_Fahrplan/01_Screens/Karte'

const components = {
  'Screen1': Orte,
  'Screen2': VonNach,
  'Screen3': Touch,
  'Screen4': Karte,
}

export default function Fahrplan() {

  const [showOrte, setShowOrte] = useState('Screen1')
  const [showTouch, setShowTouch] = useState('Screen2')
  const [showKarte, setShowKarte] = useState('Screen3')
  const [showVonNach, setShowVonNach] = useState('Screen4')

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
        FunctionOne={() => setShowOrte(!showOrte)}
        PointTwo="Von-Nach"
        FunctionTwo={() => setShowVonNach(!showVonNach)}
        PointThree="Touch"
        FunctionThree={() => setShowTouch(!showTouch)}   
        PointFour="Karte"
        FunctionFour={() => setShowKarte(!showKarte)}
      />
      <ScrollView className="">
        {showOrte && <Orte/>}
        {!showTouch && <VonNach/>}
        {!showKarte && <Touch/>}
        {!showVonNach && <Karte/>}
      </ScrollView>
    </>
  );
}
