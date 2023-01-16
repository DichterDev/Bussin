import { Text, View, ScrollView} from 'react-native'

import Tracking from '../../02_Modules/01_Tracking/Tracking'
import Fahrplan from '../../02_Modules/02_Fahrplan/Fahrplan'
import AddModules from '../../03_Buttons/01_Add_Modules/AddModules';

export default function Home() {
  return (
    <View className="flex-1 flex-col">
        <View className="bg-green-700 items-center pt-8 pb-2">
          <Text>Header</Text>
        </View>
        <View className="">
          <Tracking/>
          <Fahrplan/>
        </View>
        <View>
          <AddModules/>
        </View>
    </View>
  );
}
