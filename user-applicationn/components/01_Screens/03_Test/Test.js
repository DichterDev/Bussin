import { Text, View } from 'react-native'

export default function Test() {
  return (
    <View className="">
        <View className="bg-main-color items-center pt-8 pb-2">
              <Text className="text-font-color text-lg font-bold">Bussin</Text>
        </View>
        <View className="mt-2">
            <View className="bg-main-color">
                <Text>Titel</Text>
            </View>
            <View className="bg-secondary-color">
                <View className="grid grid-cols-3">
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                    <Text>#1</Text>
                </View>
            </View>
        </View>
    </View>
  );
}
