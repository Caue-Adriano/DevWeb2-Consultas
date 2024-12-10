import React, { useState } from "react"; 
// import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import {
    View,
    TouchableOpacity,
    TextInput,
    Text,
    StyleSheet,
    ScrollView
}
from 'react-native'

export function ActionModal( { handleClose } ) {

    const [data_consulta, setData] = useState('');
    const [doctor_id, setDoctor] = useState('');
    const [paciente_id, setPaciente] = useState('');

    //---------------------------adaptar para o patch-------------------------//
    const handleSubmit = async () => {
         try { const response = await 
            axios.post('http://localhost:/consultas/', {
                 data_consulta, doctor_id: Number(doctor_id), paciente_id: Number(paciente_id),}); 
                 if (response.status === 201) { 
                    Alert.alert('Sucesso', 'Agendamento salvo com sucesso'); } } 
                    catch (error) { 
                        Alert.alert('Erro', 'Falha ao salvar agendamento'); } };
    //---------------------------criar handleDelete---------------------------//

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

        

                    <TouchableOpacity style={Style.saveButton} onPress={handleClose/*;handleSubmit*/}>
                        <Text style={Style.saveText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.bottonDelete} onPress={handleClose/*;handleSubmit*/}>
                        <Text style={Style.saveText}>Deletar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
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
})