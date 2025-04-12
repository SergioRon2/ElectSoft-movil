import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Municipios from './main-screen/municipios.screen';
import UniqueMunicipioScreen from './[id]/uniqueMunicipio.screen';

const Stack = createStackNavigator();

const ReportesLayout = () => {
    return (
        <Stack.Navigator initialRouteName="Municipios" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Municipios" component={Municipios} />
            <Stack.Screen name="UniqueMunicipio" component={UniqueMunicipioScreen} />
        </Stack.Navigator>
    );
};

export default ReportesLayout;