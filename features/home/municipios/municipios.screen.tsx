import { MunicipioCard } from 'components/cards/municipioCard.component';
import { IMunicipio } from 'interfaces/municipio.interface';
import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';

const Municipios = () => {

    const municipios: IMunicipio[] = [
        {
            id: 1,
            municipio: "Valledupar",
            votantes: "150,000",
            candidatoFavorito: "Juan Pérez",
            poblacion: "500,000",
            poblacionParticipe: "300,000",
        },
        {
            id: 2,
            municipio: "Aguachica",
            votantes: "80,000",
            candidatoFavorito: "María Gómez",
            poblacion: "200,000",
            poblacionParticipe: "120,000",
        },
        {
            id: 3,
            municipio: "Bosconia",
            votantes: "50,000",
            candidatoFavorito: "Carlos Ruiz",
            poblacion: "100,000",
            poblacionParticipe: "60,000",
        },
        {
            id: 4,
            municipio: "Chimichagua",
            votantes: "30,000",
            candidatoFavorito: "Ana Martínez",
            poblacion: "80,000",
            poblacionParticipe: "40,000",
        },
        {
            id: 5,
            municipio: "La Paz",
            votantes: "20,000",
            candidatoFavorito: "Luis Torres",
            poblacion: "50,000",
            poblacionParticipe: "25,000",
        },
        {
            id: 6,
            municipio: "Codazzi",
            votantes: "70,000",
            candidatoFavorito: "Sofía López",
            poblacion: "150,000",
            poblacionParticipe: "90,000",
        },
    ];

    return (
        <View className='h-full'>
            <Text className='text-2xl font-bold text-center py-4'>Municipios</Text>
            <FlatList
                data={municipios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MunicipioCard municipioData={item} />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    )
}


export default Municipios;