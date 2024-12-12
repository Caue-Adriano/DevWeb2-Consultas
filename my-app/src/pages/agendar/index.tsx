import React, { useState } from "react";
import { Style } from "./styles";
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';
import { Backend } from "../../../App";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Agendar() {
    const [data_consulta, setData] = useState('');
    const [hora_consulta, setHora] = useState('');
    const [doctor_id, setDoctor] = useState('');
    const [paciente_id, setPaciente] = useState('');
    const navigation = useNavigation<NavigationProp<any>>();

    const handleSubmit = async () => {
        if (!data_consulta || !hora_consulta || !doctor_id || !paciente_id) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        try {
            const [day, month, year] = data_consulta.split('/');
            const [hours, minutes] = hora_consulta.split(':'); 

            if (!day || !month || !year || isNaN(new Date(`${year}-${month}-${day}T${hours}:${minutes}:00Z`).getTime())) {
                Alert.alert('Erro', 'Data ou hora inválida.');
                return;
            }

            const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:00Z`;

            const response = await axios.post(`${Backend}/consulta`, {
                data_consulta: formattedDate,
                doctor_id: Number(doctor_id),
                paciente_id: Number(paciente_id),
            });

            if (response.status === 200) {
                Alert.alert('Sucesso', 'Agendamento salvo com sucesso');
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            Alert.alert('Erro', 'Falha ao salvar agendamento');
        }
    };

    return (
        <View style={Style.container}>
            <ScrollView style={Style.containerScroll}>
                <View style={Style.box}>
                    <Text style={Style.titleText}>ID do paciente</Text>
                    <TextInput
                        style={Style.inputBox}
                        value={paciente_id}
                        onChangeText={setPaciente}
                        keyboardType="numeric"
                    />
                    <Text style={Style.titleText}>ID do médico</Text>
                    <TextInput
                        style={Style.inputBox}
                        value={doctor_id}
                        onChangeText={setDoctor}
                        keyboardType="numeric"
                    />
                    <Text style={Style.titleText}>Data</Text>
                    <View style={Style.inputBox}>
                        <TextInputMask
                            type={'datetime'}
                            options={{ format: 'DD/MM/YYYY' }}
                            value={data_consulta}
                            onChangeText={text => setData(text)}
                            placeholder="DD/MM/AAAA"
                        />
                    </View>
                    <Text style={Style.titleText}>Hora</Text>
                    <View style={Style.inputBox}>
                        <TextInputMask
                            type={'datetime'}
                            options={{ format: 'HH:mm' }}
                            value={hora_consulta}
                            onChangeText={text => setHora(text)}
                            placeholder="HH:mm"
                        />
                    </View>
                    <TouchableOpacity style={Style.saveButton} onPress={handleSubmit}>
                        <Text style={Style.saveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={Style.homeButton} onPress={() => navigation.navigate("homepage")}>
                    <Text style={Style.homeText}>Home</Text>
                </TouchableOpacity>
        </View>
    );
}
