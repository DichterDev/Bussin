import { Text, View, ScrollView, Button} from 'react-native'
import { MenuProvider } from 'react-native-popup-menu';

import FahplranModule from '../../02_Modules/02_Fahrplan/Fahrplan'

export default function Fahrplan() {
  return (
    <MenuProvider>
        <View className="flex-1 flex-col">
            <View className="bg-main-color items-center pt-8 pb-2">
              <Text className="text-font-color text-lg font-bold">Bussin</Text>
            </View>
            <View className="border-b border-b-font-color">
              <FahplranModule
                Visibility={'hidden'}
              />
            </View>
            <ScrollView>
              <Text>Content</Text>
            </ScrollView>
        </View>
    </MenuProvider>
  );
}
