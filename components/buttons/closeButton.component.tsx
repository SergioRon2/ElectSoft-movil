import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
    onPress: () => void;
}

const CloseButton: React.FC<ButtonProps> = ({ onPress }) => {
    const [isPressed, setIsPressed] = useState<boolean>(false);

    if (isPressed) {
        return (
            <View className='bg-white/50 h-full w-full gap-2 justify-center items-center animate-fade-in'>
                <Text className='font-bold text-2xl text-center'>¿Esta seguro que desea salir del formulario?</Text>
                <Text className='font-bold text-base text-center text-gray-500'>Si ya finalizo el formulario puede salir</Text>
                <View className='flex-row gap-4 mt-4'>
                    <Pressable
                        className="button border border-blue-600 py-2 px-4 rounded-lg"
                        onPress={() => {
                            setIsPressed(false);
                            onPress();
                        }}
                    >
                        <Text className='text-blue-600 font-bold text-xl'>Salir</Text>
                    </Pressable>
                    <Pressable
                        className="button bg-blue-600 py-2 px-4 rounded-lg"
                        onPress={() => {
                            setIsPressed(false);
                        }}
                    >
                        <Text className='text-white font-bold text-xl'>Seguir en el formulario</Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <Pressable
            className="button absolute top-8 left-4 z-50 bg-blue-600 p-2 rounded-full"
            onPress={() => setIsPressed(true)}
        >
            <Ionicons name="arrow-back-outline" size={24} color="#fff" />
        </Pressable>
    );
};


export default CloseButton;