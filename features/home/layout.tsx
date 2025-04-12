import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DashboardScreen from './dashboard/dashboard.screen';
import {Navbar} from 'components/navigators/navbar.component';
import Mapas from './mapas/mapas.screen';
import ReportesLayout from './reportes/layout';
import ProfileScreen from './profile/profile.screen';

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
                    name="ReportesLayout"
                    component={ReportesLayout}
                    options={{
                        tabBarLabel: 'Reportes',
                        tabBarIcon: ({ focused, color, size }: any) => (
                            <Ionicons
                                name={focused ? 'folder-open' : 'folder-open-outline'}
                                size={size}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ focused, color, size }: any) => (
                            <Ionicons
                                name={focused ? 'person-circle' : 'person-circle-outline'}
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