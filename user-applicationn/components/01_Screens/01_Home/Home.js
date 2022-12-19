import { Text, View, ScrollView} from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 flex-col">
        <View className="bg-green-700 items-center pt-8 pb-2">
            <Text>Header</Text>
        </View>
        <View className="">
            <ScrollView className="bg-blue-700 p-4">
                <Text>Body</Text>
            </ScrollView>
        </View>
        <View className="bg-red-700 items-center p-4">
            <Text>Footer</Text>
        </View>
    </View>
  );
}
