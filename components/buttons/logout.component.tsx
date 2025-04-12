import { Pressable, Text } from "react-native";
import useAuthStore from "store/auth/auth.store";


export const LogoutButton = () => {
    const { logout } = useAuthStore();

    return (
        <Pressable
            onPress={logout}
            className="px-6 py-3 mt-8 bg-blue-600 rounded-full animate-fade-in"
            android_ripple={{ color: '#ffffff' }}
        >
            <Text className="text-white text-lg text-center font-semibold">Cerrar sesión</Text>
        </Pressable>
    );
}
