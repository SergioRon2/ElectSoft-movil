import { useNavigation } from '@react-navigation/native';
import { IMunicipio } from 'interfaces/municipio.interface';
import { View, Text, Pressable } from 'react-native';
import { ProgressBar } from 'react-native-paper';

interface Props {
    municipioData: IMunicipio;
}

const cleanNumber = (value: string | number): number => {
    if (typeof value === 'string') {
        return parseFloat(value.replace(/,/g, '')) || 0;
    }
    return Number(value) || 0;
};


export const MunicipioCard = ({ municipioData }: Props) => {
    const poblacion = cleanNumber(municipioData.poblacion);
    const poblacionParticipe = cleanNumber(municipioData.poblacionParticipe);

    const progress = (poblacion > 0 && !isNaN(poblacion) && !isNaN(poblacionParticipe) && poblacionParticipe !== 0)
        ? poblacionParticipe / poblacion
        : 0;

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('UniqueMunicipio', { municipio: municipioData });
    };

    return (
        <Pressable onPress={handleNavigate} className='bg-blue-100 p-1 flex-row h-48 w-11/12 rounded-2xl justify-center items-center mx-auto mt-5 animate-fade-in'>
            <View className='bg-blue-300 w-1/2 h-full rounded-2xl justify-center gap-2 items-center animate-fade-in'>
                <Text className='text-black text-2xl font-bold animate-fade-in'>{municipioData.municipio}</Text>
                <View className='flex-col px-2 gap-2 justify-between items-start w-full mt-4 animate-fade-in'>
                    <View className='flex-row justify-around items-center w-full'>
                        <Text className='text-black text-xl font-bold'>{municipioData.votantes}</Text>
                        <Text className='text-gray-700 text-md font-bold'>Votantes</Text>
                    </View>
                    <View className='flex-col justify-around items-center w-full mt-2'>
                        <Text className='text-black text-xl font-bold'>{municipioData.candidatoFavorito}</Text>
                        <Text className='text-gray-700 text-base font-bold'>Candidato favorito</Text>
                    </View>
                </View>
            </View>
            <View className='w-1/2 bg-blue-100 rounded-r-2xl p-5 h-full justify-center gap-4 items-center animate-fade-in'>
                <View className='w-full h-1/2 justify-center items-start animate-fade-in'>
                    <Text className='text-black text-md font-bold'>Numero de la poblacion</Text>
                    <Text className='text-black text-3xl font-bold'>{municipioData.poblacion}</Text>
                </View>
                <View className='w-full h-1/2 justify-center items-start animate-fade-in'>
                    <Text className='text-black text-md font-bold'>Porcentaje de personas que votaron</Text>
                    <View className='w-full flex-row gap-3 justify-center items-center'>
                        <ProgressBar
                            progress={progress}
                            color="#2563eb"
                            className='w-3/4 h-auto'
                            style={{ height: 10, borderRadius: 5, backgroundColor: '#aaa' }}
                        />
                        <Text className='text-gray-600 text-base '>
                            {`${(progress * 100).toFixed()}%`}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}