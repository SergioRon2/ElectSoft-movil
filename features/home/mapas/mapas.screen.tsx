import { useFocusEffect } from '@react-navigation/native';
import LoadingComponent from 'components/loading/loading.component';
import { Map } from 'components/maps/map.component';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

const Mapas = () => {
    const [loading, setLoading] = useState(true);

    useFocusEffect(
            useCallback(() => {
                setLoading(true);
                const timeout = setTimeout(() => setLoading(false), 2000);
    
                return () => clearTimeout(timeout);
            }, [])
        );

    if (loading) return <LoadingComponent />;

    return (
        <View className='h-full animate-fade-in'>
            <Text className='text-2xl font-bold text-center mt-4'>Mapas</Text>
            <View className='p-4 h-2/3 w-full gap-2 flex-row'>
                <Map tailwindWidth='w-full' />
            </View>
            <View>
                <ScrollView className='p-4'>
                <View className='flex-col justify-center gap-3 mt-4 w-full'>
                    <View className='flex-row items-center'>
                        <View className='w-4 h-4 bg-blue-500 rounded-full mr-2'></View>
                        <Text className='text-md text-gray-700'>Alta participación</Text>
                    </View>
                    <View className='flex-row items-center'>
                        <View className='w-4 h-4 bg-red-500 rounded-full mr-2'></View>
                        <Text className='text-md text-gray-700'>Baja participación</Text>
                    </View>
                    <View className='flex-row items-center'>
                        <View className='w-4 h-4 bg-green-500 rounded-full mr-2'></View>
                        <Text className='text-md text-gray-700'>Participación moderada</Text>
                    </View>
                    <View className='flex-row items-center'>
                        <View className='w-4 h-4 bg-yellow-500 rounded-full mr-2'></View>
                        <Text className='text-md text-gray-700'>Datos insuficientes</Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default Mapas;