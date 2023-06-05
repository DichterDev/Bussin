import { Text, View, ScrollView, Button, SafeAreaView} from 'react-native'
import { useBusIdStore } from '../../../stores/BusIdStore'

import TrackingModule from '../../02_Modules/01_Tracking/Tracking';
import ItemTemplate from '../../02_Modules/01_Tracking/01_Items/ItemTemplate';
import data from '../../02_Modules/01_Tracking/01_Items/data.json';

export default function Tracking() {
  const BusId = useBusIdStore((state) => state.BusId)

  

  return (
    <>
      <View>
        <SafeAreaView className="bg-main-color items-center mb-2">
          <Text className="text-font-color text-lg font-bold">Bussin</Text>
        </SafeAreaView>
        <ScrollView className="">
          <TrackingModule/>
        </ScrollView>
        <ItemTemplate
          Icon={Object.values(data)[BusId].typeStr}
          nummer={Object.values(data)[BusId].nummer}
          richtung={Object.values(data)[BusId].richtung}
          disabled={true}
        />
      </View>
    </>
  );
}
