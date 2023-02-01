import { Text, View } from 'react-native'

export default function Test() {
  return (
    <View>
        <View className="bg-main-color items-center pt-8 pb-2">
              <Text className="text-font-color text-lg font-bold">Bussin</Text>
        </View>
        <View className="mt-2">
            <View className="bg-main-color">
                <Text>Titel</Text>
            </View>
        </View>
        <View className="bg-secondary-color flex-row justify-between">
            <View className="flex-column">
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
            </View>
            <View className="flex-column justify-center">
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
            </View>
            <View className="flex-column">
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
                <View className="border p-4"> 
                    <Text>#1</Text>
                </View>
            </View>
        </View>
    </View>
  );
}
