import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../pages/homepage";
import Agendar from "../pages/agendar";
import CadastrarMedico from "../pages/cadastrarMedico";
import CadastrarPaciente from "../pages/cadastrarPaciente";
import ViewMedico from "../pages/viewMedico";
import ViewPaciente from "../pages/viewPaciente";
import ViewConsulta from "../pages/viewConsulta";

export default function Routes(){
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="homepage"
            screenOptions={{
                headerShown:false,
            }}>
            <Stack.Screen 
                name="homepage"
                component={Homepage}
            />

            <Stack.Screen
                name="agendarConsulta"
                component={Agendar}
            />

            <Stack.Screen 
                name="cadastrarMedico"
                component={CadastrarMedico}
            />

            <Stack.Screen 
                name="cadastrarPaciente"
                component={CadastrarPaciente}
            />

            <Stack.Screen 
                name="visualizarMedico"
                component={ViewMedico}
            />

            <Stack.Screen 
                name="visualizarPaciente"
                component={ViewPaciente}
            />

            <Stack.Screen 
                name="visualizarConsulta"
                component={ViewConsulta}
            />
        </Stack.Navigator>
    )
}