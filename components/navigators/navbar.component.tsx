import { View, Image } from 'react-native';

export const Navbar = () => {
    return (
        <View className='bg-blue-300 h-20 py-4 rounded-b-3xl justify-around items-center'>
            {/* <SearchInput />
            <View className={`flex-row w-3/4 justify-center border-2 border-white items-center animate-fade-in`}>
                <Pressable onPress={() => setSelected(1)} className={`${selected === 1 ? 'bg-white' : 'bg-transparent'} border-r-2 border-white px-6 py-2 w-1/2`}>
                    <Text className={`${selected === 1 ? 'text-blue-600' : 'text-white'} text-xl font-bold text-center`}>Gobernador 1</Text>
                </Pressable>
                <Pressable onPress={() => setSelected(2)} className={`${selected === 2 ? 'bg-white' : 'bg-transparent'} border-l-2 border-white px-6 py-2 w-1/2`}>
                    <Text className={`${selected === 2 ? 'text-blue-600' : 'text-white'} text-xl font-bold text-center`}>Gobernador 2</Text>
                </Pressable>
            </View> */}
            <Image source={require('../../assets/img/logo.png')} style={{ width: '30%', height: '80%' }} resizeMode='contain' />
        </View>
    );
};  
