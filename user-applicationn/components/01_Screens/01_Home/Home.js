import { Text, View, ScrollView, Button} from 'react-native'
import { useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import Tracking from '../../02_Modules/01_Tracking/Tracking'
import Fahrplan from '../../02_Modules/02_Fahrplan/Fahrplan'
import AddModules from '../../03_Buttons/01_Add_Modules/AddModules';
import AddButtonMenu from '../../04_Menu\'s/01_AddButtonMenu/AddButtonMenu';

export default function Home() {
  const [showTracking, setShowTracking] = useState(false)
  const [showFahrplan, setShowFahrplan] = useState(false)

  return (
    <MenuProvider>
        <View className="flex-1 flex-col">
            <View className="bg-green-700 items-center pt-8 pb-2">
              <Text>Header</Text>
            </View>
            <ScrollView>
              <View className="">
                {showTracking && <Tracking />}
                {showFahrplan && <Fahrplan />}
              </View>
              <View className="items-center justify-center">
                <AddModules
                  AddTracking={(setShowTracking(!showTracking))}
                  AddFahrplan={(setShowFahrplan(!showFahrplan))}
                />          
              </View>
            </ScrollView>
        </View>
    </MenuProvider>
  );
}
