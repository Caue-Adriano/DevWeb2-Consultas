import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextInputMask } from 'react-native-masked-text';
import { Backend } from "../../../App";
import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet,
    ScrollView,
    Alert
} from 'react-native';

export function ActionModal({ handleClose, id }) {
    const [data_consulta, setData] = useState('');
    const [doctor_id, setDoctor] = useState('');
    const [paciente_id, setPaciente] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (!id) {
                console.log("ID não fornecido.");
                return;
            }
            console.log("ID recebido:", id);
            try {
                const response = await axios.get(`${Backend}/consulta/${id}`);
                console.log('Dados da consulta:', response.data);  // Log para depuração
                const consulta = response.data;

                if (consulta.data_consulta) {
                    const data = new Date(consulta.data_consulta);
                    const dataFormatada = `${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`;
                    setData(dataFormatada);
                } else {
                    console.log('Data da consulta não encontrada.');
                    setData('');
                }

                setDoctor(consulta.doctor_id ? consulta.doctor_id.toString() : '');
                setPaciente(consulta.paciente_id ? consulta.paciente_id.toString() : '');
            } catch (error) {
                console.error('Erro ao carregar dados da consulta:', error);
                Alert.alert('Erro', 'Falha ao carregar dados da consulta');
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const [day, month, year] = data_consulta.split('/');
            const dataISO = new Date(`${year}-${month}-${day}`).toISOString();

            const response = await axios.put(`${Backend}/consulta/${id}`, {
                data_consulta: dataISO,
                doctor_id: Number(doctor_id),
                paciente_id: Number(paciente_id),
            });
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Agendamento salvo com sucesso');
                handleClose();
            }
        } catch (error) {
            console.error('Erro ao salvar agendamento:', error);
            Alert.alert('Erro', 'Falha ao salvar agendamento');
        }
    };

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${Backend}/consulta/${id}`);
            if (response.status === 200) {
                Alert.alert('Sucesso', 'Agendamento deletado com sucesso');
                handleClose();
            }
        } catch (error) {
            console.error('Erro ao deletar agendamento:', error);
            Alert.alert('Erro', 'Falha ao deletar agendamento');
        }
    };

    return (
        <ScrollView style={{flex:1}}>
            <View style={Style.container}>
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
                    <TouchableOpacity style={Style.bottonDelete} onPress={handleDelete}>
                        <Text style={Style.saveText}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const Style = StyleSheet.create({ 
    container:{
        flex:1,
        padding:20
    },
    box:{
        height:'auto',
        backgroundColor:'white',
        width:'100%',
        borderRadius: 10,
        padding: 20,
        borderColor:'black',
        borderWidth:1
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    inputBox:{
        width:'100%',
        backgroundColor:'white',
        borderRadius: 10,
        borderColor:'#a4a4a4',
        borderWidth: 1,
        marginBottom: 20
    },
    saveButton:{
       width: 100,
       height: 39,
       backgroundColor:'#89CA5B',
       borderRadius: 10,
       display:'flex',
       justifyContent:'center',
       alignContent:'center',

       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    saveText:{
        fontWeight:'bold',
        fontSize: 16,
        color:'white',
        textAlign:'center'
    },
    bottonDelete:{
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor:'red',
        borderRadius:10,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});