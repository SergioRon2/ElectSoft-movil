import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from './dashboard/dashboard.screen';
import SettingsScreen from './settings/settings.screen';
import Municipios from './municipios/municipios.screen';
import {Navbar} from 'components/navigators/navbar.component';
import Mapas from './mapas/mapas.screen';

const Tab = createBottomTabNavigator();

// Tab Navigator
const HomeTabNavigator = () => {
    return (
        <View style={{ flex: 1 }} className="mt-8">
            <Navbar />
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarActiveTintColor: '#2563eb',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Mapas"
                    component={Mapas}
                    options={{
                        tabBarLabel: 'Mapas',
                        tabBarIcon: ({ focused, color, size }: any) => (
                            <Ionicons
                                name={focused ? 'map' : 'map-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={DashboardScreen}
                    options={{
                        tabBarLabel: 'Dashboard',
                        tabBarIcon: ({ focused, color, size }: any) => (
                            <Ionicons
                                name={focused ? 'home' : 'home-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Municipios"
                    component={Municipios}
                    options={{
                        tabBarLabel: 'Municipios',
                        tabBarIcon: ({ focused, color, size }: any) => (
                            <Ionicons
                                name={focused ? 'trail-sign' : 'trail-sign-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Configuración',
                        tabBarIcon: ({ focused, color, size }: any) => (
                            <Ionicons
                                name={focused ? 'settings' : 'settings-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

export default HomeTabNavigator;