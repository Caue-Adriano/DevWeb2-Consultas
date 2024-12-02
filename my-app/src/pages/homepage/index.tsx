import React from "react";
import { useNavigation,NavigationProp } from '@react-navigation/native'

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Style } from "./styles";
import AgendarIcon from '../../assets/buttonsAgendarIcon.png'
import MedicoIcon from '../../assets/buttonsMedicoIcon.png'
import CadastrarPacienteIcon from '../../assets/buttonsCadastrarPacienteIcon.png'
import VisualizarPacienteIcon from '../../assets/buttonsVisualizarPacienteIcon.png'
import VisualizarConsultaIcon from '../../assets/buttonsVisualizarConsultaIcon.png'

 export default function Homepage(){
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={Style.container}>
            <View style={Style.box}>

                <View style={Style.agendar}>
                    <View style={Style.title}>
                        <Text style={Style.titleText}>Agendar</Text>
                    </View>
                    <View style={Style.boxButtons}>
                        <TouchableOpacity style={Style.buttons} onPress={() => navigation.navigate("agendarConsulta")}>
                            <Image source={AgendarIcon}/>
                            <Text style={Style.buttonsText}>Consulta</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Style.cadastrar}>
                    <View style={Style.title}>
                        <Text style={Style.titleText}>Cadastrar</Text>
                    </View>
                    <View style={Style.boxButtons}>
                        <TouchableOpacity style={Style.buttons} onPress={() => navigation.navigate("cadastrarMedico")}>
                            <Image source={MedicoIcon}/>
                            <Text style={Style.buttonsText}>Médico</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.buttons} onPress={() => navigation.navigate("cadastrarPaciente")}>
                            <Image source={CadastrarPacienteIcon}/>
                            <Text style={Style.buttonsText}>Paciente</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Style.visualizar}>
                    <View style={Style.title}>
                        <Text style={Style.titleText}>Visualizar</Text>
                    </View>
                    <View style={Style.boxButtons}>
                        <TouchableOpacity style={Style.buttons} onPress={() => navigation.navigate("visualizarMedico")}>
                            <Image source={MedicoIcon}/>
                            <Text style={Style.buttonsText}>Médico</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.buttons} onPress={() => navigation.navigate("visualizarPaciente")}>
                            <Image source={VisualizarPacienteIcon}/>
                            <Text style={Style.buttonsText}>Paciente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.buttons} onPress={() => navigation.navigate("visualizarConsulta")}>
                            <Image source={VisualizarConsultaIcon}/>
                            <Text style={Style.buttonsText}>Consulta</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}