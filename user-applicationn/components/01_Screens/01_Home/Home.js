import { Text, View, ScrollView, SafeAreaView} from 'react-native'
import { useState } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import Tracking from '../../02_Modules/01_Tracking/Tracking'
import Fahrplan from '../../02_Modules/02_Fahrplan/Fahrplan'
import AddModules from '../../03_Buttons/01_Add_Modules/AddModules';
import GlobalStyles from '../../../GlobalStyles';

export default function Home() {
  

  const [showTracking, setShowTracking] = useState('Module1')
  const [showFahrplan, setShowFahrplan] = useState('Module2')

  return (
    <MenuProvider>
        <View className="flex-1 flex-col">
            <SafeAreaView className="bg-main-color items-center pt-8">
              <Text className="text-font-color text-lg font-bold">Bussin</Text>
            </SafeAreaView>
            <ScrollView>
              <View className="mt-2">
                {showFahrplan && <Fahrplan DelComponent={() => setShowFahrplan(!showFahrplan)}/>}
                {!showTracking && <Tracking DelComponent={() => setShowTracking(!showTracking)}/>}
              </View>
              <View className="items-center justify-center">
                <AddModules 
                  AddTracking={() => setShowTracking(!showTracking)}
                  AddFahrplan={() => setShowFahrplan(!showFahrplan)}
                  //disabledTracking={true}
                  //disabledFahrplan={true}
                />
              </View>
            </ScrollView>
        </View>
    </MenuProvider>
  );
}
