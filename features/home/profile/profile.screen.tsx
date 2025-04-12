import { useFocusEffect } from '@react-navigation/native';
import { LogoutButton } from 'components/buttons/logout.component';
import { Feature } from 'components/cards/feature.component';
import LoadingComponent from 'components/loading/loading.component';
import { useCallback, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

const ProfileScreen = () => {
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
        <View className='mb-12'>
            <ScrollView className="h-full px-4 mt-4">
                <Text className="text-2xl font-bold mb-4">Mi Perfil</Text>

                {/* Perfil */}
                <View className="flex-row items-center bg-white p-4 rounded-xl shadow mb-6">
                    <View>
                        <Text className="text-lg font-semibold">Yulieth Cervantes</Text>
                        <Text className="text-base text-gray-500">Administrador</Text>
                        <Text className="text-sm text-gray-500">yulieth@example.com</Text>
                    </View>
                </View>

                {/* Plan */}
                <View className="bg-white p-5 rounded-xl shadow mb-6">
                    <Text className="text-base text-gray-600 mb-1">Plan Actual</Text>
                    <Text className="text-xl font-semibold">💼 Plan Profesional</Text>
                    <Text className="text-sm text-gray-500">$1.200.000/mes</Text>
                </View>

                {/* Funcionalidades */}
                <View className="bg-white p-5 rounded-xl shadow space-y-3">
                    <Text className="text-lg font-bold text-gray-800 mb-2">Funcionalidades</Text>

                    <Feature label="Gestión de votantes" value="10/10.000" />
                    <Feature label="Encuestas" value="3/10 encuestas, 5/10 preguntas" />
                    <Feature label="Mensajes masivos" value="100/1000" />
                    <Feature label="Eventos" value="3/10 eventos" />
                    <Feature label="Soporte técnico" value="🕒 Extendido" />
                    <Feature label="Facturación" value="📄 Avanzada" />
                    <Feature label="Gestión de productos" value="Con impuestos" />
                    <Feature label="Organizaciones" value="2/5 activas" />
                    <Feature label="Contabilidad" value="✅ Activado" />
                    <Feature label="Gestión de apoyos" value="✅ Activado" />
                    <Feature label="Candidatos y posiciones" value="✅ Activado" />
                    <Feature label="Roles y permisos" value="✅ Activado" />
                    <Feature label="Usuarios y personas" value="✅ Activado" />
                    <Feature label="Ubicación territorial" value="✅ Activado" />
                    <Feature label="Mesas de votación" value="✅ Activado" />
                    <Feature label="Sistema de encuestas" value="✅ Activado" />
                    <Feature label="Eventos políticos" value="✅ Activado" />
                    <Feature label="Distribución de dinero" value="🚫 No disponible" />
                </View>

                {/* Cerrar sesion */}
                <LogoutButton />
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
