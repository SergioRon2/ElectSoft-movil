import { View, Text } from "react-native";

export const Feature = ({ label, value }: { label: string; value: string }) => (
    <View className="flex-row justify-between items-center border-b border-gray-100 p-2">
        <Text className="text-gray-700">{label}</Text>
        <Text className="text-gray-900 font-semibold">{value}</Text>
    </View>
);