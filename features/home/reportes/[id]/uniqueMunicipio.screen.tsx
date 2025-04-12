import { useFocusEffect, useRoute } from "@react-navigation/native";
import AreaChartComponent from "components/charts/areaChart.component";
import BarChartComponent from "components/charts/barChart.component";
import PieChartComponent from "components/charts/pieChart.component";
import LoadingComponent from "components/loading/loading.component";
import { useCallback, useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const UniqueMunicipioScreen = () => {
    const route = useRoute();
    const { municipio } = route.params;
    const [loading, setLoading] = useState(true);

    useFocusEffect(
            useCallback(() => {
                setLoading(true);
                const timeout = setTimeout(() => setLoading(false), 2000);
    
                return () => clearTimeout(timeout);
            }, [])
        );

    if (loading) return <LoadingComponent />;

    const items = [
        { title: 'Gráfico de Barras', component: <BarChartComponent /> },
        { title: 'Gráfico de Pastel', component: <PieChartComponent /> },
        { title: 'Gráfico de Area', component: <AreaChartComponent /> },
    ];

    return (
        <View className="animate-fade-in px-12 w-full">
            <Text className="text-3xl font-bold text-center py-6">
                {municipio.municipio}
            </Text>

            <View>
                <Carousel
                    width={width * 0.85}
                    height={300}
                    data={items}
                    loop={false}
                    style={{ alignSelf: 'center' }}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: 16,
                                    alignItems: 'center',
                                }}
                            >
                                {item.component}
                            </View>
                        );
                    }}
                />
            </View>

            <Text className="text-2xl font-bold py-2">
                Estadisticas 
            </Text>

            <View className="rounded-2xl justify-center animate-fade-in">
                <View className="bg-gray-100 py-4 rounded-xl space-y-2">
                    <Text className="text-lg font-semibold">
                        Municipio: <Text className="font-normal">{municipio.municipio}</Text>
                    </Text>
                    <Text className="text-lg font-semibold">
                        Votantes: <Text className="font-normal">{municipio.votantes} votantes</Text>
                    </Text>
                    <Text className="text-lg font-semibold">
                        Candidato Favorito: <Text className="font-normal">{municipio.candidatoFavorito}</Text>
                    </Text>
                    <Text className="text-lg font-semibold">
                        Población: <Text className="font-normal">{municipio.poblacion}</Text>
                    </Text>
                    <Text className="text-lg font-semibold">
                        Población Partícipe: <Text className="font-normal">{municipio.poblacionParticipe}</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}


export default UniqueMunicipioScreen;