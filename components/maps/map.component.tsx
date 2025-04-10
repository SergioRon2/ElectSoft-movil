import { View } from "react-native"
import MapView, { Marker } from 'react-native-maps';

export const Map = ({tailwindWidth}: any) => {
    return (
        <View className={`h-full ${tailwindWidth} border border-gray-300`}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 9.9763,
                    longitude: -73.894,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 9.9763, longitude: -73.894 }}
                    title="Bosconia"
                    description="Estoy aquí"
                />
            </MapView>
        </View>
    )
}