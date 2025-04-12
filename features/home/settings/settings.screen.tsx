import { useFocusEffect } from '@react-navigation/native';
import LoadingComponent from 'components/loading/loading.component';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import useAuthStore from 'store/auth/auth.store';

const SettingsScreen = () => {
    const {logout} = useAuthStore();
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
        <View className="flex-1 justify-center items-center bg-white animate-fade-in">
            <Text className="text-2xl font-bold mb-5">Configuración</Text>
            <Pressable
            onPress={logout}
            className="px-6 py-3 bg-blue-500 rounded-full animate-fade-in"
            android_ripple={{ color: '#ffffff' }}
            >
            <Text className="text-white text-lg font-semibold">Cerrar sesión</Text>
            </Pressable>
        </View>
    );
};

export default SettingsScreen;
