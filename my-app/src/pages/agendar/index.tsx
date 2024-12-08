import React from "react";
import { useState } from "react";
import { Style } from "./styles";
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

export default function Agendar(){
    const [data_consulta, setData] = useState('');
    const [doctor_id, setDoctor] = useState('');
    const [paciente_id, setPaciente] = useState('');

    const handleSubmit = async () => {
         try { const response = await 
            axios.post('http://localhost:/consultas/', {
                 data_consulta, doctor_id: Number(doctor_id), paciente_id: Number(paciente_id),}); 
                 if (response.status === 201) { 
                    Alert.alert('Sucesso', 'Agendamento salvo com sucesso'); } } 
                    catch (error) { 
                        Alert.alert('Erro', 'Falha ao salvar agendamento'); } };
    return (
        <View style={Style.container}>
            <ScrollView style={Style.containerScroll}>
                <View style={Style.box}>
                    
                    <Text style={Style.titleText}>ID do paciente</Text>
                    <TextInput style={Style.inputBox}
                    value={paciente_id}
                    onChangeText={setPaciente}></TextInput>

                    <Text style={Style.titleText}>ID do médico</Text>
                    <TextInput style={Style.inputBox}
                    value={doctor_id}
                    onChangeText={setDoctor}></TextInput>

                    <Text style={Style.titleText}>Data</Text>
                    <View style={Style.inputBox}>
                            <TextInputMask type={'datetime'} options={{ 
                                format: 'DD/MM/YYYY' }}
                            value={data_consulta}
                            onChangeText={text => setData(text)}
                            placeholder="DD/MM/AAAA"
                            />
                    </View>

        

                    <TouchableOpacity style={Style.saveButton} onPress={handleSubmit}>
                        <Text style={Style.saveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        

        
    )
}