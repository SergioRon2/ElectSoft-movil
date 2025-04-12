import { useFocusEffect } from '@react-navigation/native';
import AreaChartComponent from 'components/charts/areaChart.component';
import PieChartComponent from 'components/charts/pieChart.component';
import { Google_FormularioVotantes } from 'components/forms/votantesGoogleForm.component';
import LoadingComponent from 'components/loading/loading.component';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, Pressable, ScrollView, Text, View } from 'react-native';

const DashboardScreen = () => {
    const [registerActive, setRegisterActive] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            const timeout = setTimeout(() => setLoading(false), 2000);

            return () => clearTimeout(timeout);
        }, [])
    );

    if (loading) return <LoadingComponent />;


    if (registerActive) {
        return <Google_FormularioVotantes closePress={() => setRegisterActive(false)} />
    }


    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            className="flex-grow p-4 bg-gray-100 animate-fade-in"
        >

            {/* values */}
            <View className='flex-col gap-4 justify-center w-full bg-white border border-gray-200 px-5 py-5 rounded-lg items-center mb-4'>
                <Text className='text-lg font-bold text-black'>Registro de votantes</Text>
                <Text className='text-sm font-bold text-gray-700'>
                    Aquí puedes registrar a los votantes para el próximo evento electoral. Asegúrate de ingresar la información correctamente.
                </Text>
                <Pressable
                    className='bg-blue-600 w-11/12 py-2 rounded-lg shadow-lg'
                    onPress={() => setRegisterActive(true)}
                >
                    <Text className='text-lg text-center text-white font-bold'>Registrar votantes</Text>
                </Pressable>
            </View>


            {/* charts */}
            <View className='gap-4 mb-4'>
                <View className='items-center bg-white justify-center'>
                    <AreaChartComponent />
                </View>
                <View className='items-center bg-white py-2 justify-center'>
                    <Text className='text-xl font-bold'>Proyectos por estados</Text>
                    <PieChartComponent />
                </View>
            </View>


            {/* fetch votantes registrados */}
            <View>
                <Text className="animate-fade-in text-xl font-bold mb-4">Votantes registrados</Text>
                <View className="animate-fade-in bg-white border border-gray-200 p-4 rounded-lg mb-4">
                    <Text className="text-lg font-bold">Card 1</Text>
                    <Text className="text-gray-600">This is some content for card 1.</Text>
                </View>
                <View className="animate-fade-in bg-white border border-gray-200 p-4 rounded-lg mb-4">
                    <Text className="text-lg font-bold">Card 2</Text>
                    <Text className="text-gray-600">This is some content for card 2.</Text>
                </View>
                <View className="animate-fade-in bg-white border border-gray-200 p-4 rounded-lg mb-4">
                    <Text className="text-lg font-bold">Card 3</Text>
                    <Text className="text-gray-600">This is some content for card 3.</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default DashboardScreen;
