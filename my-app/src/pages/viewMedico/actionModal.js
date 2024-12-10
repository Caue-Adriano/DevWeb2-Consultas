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

const RadioButton = ({ label, selected, onPress }) => 
    ( <TouchableOpacity onPress={onPress} style={Style.radioButtonContainer}> 
    <View style={[Style.radioButton, selected && Style.radioButtonSelected]}> 
        {selected && <View style={Style.radioButtonInner} />} 
        </View> 
        <Text style={Style.radioButtonText}>{label}</Text> 
        </TouchableOpacity> 
);

export function ActionModal( { handleClose } ) {
    
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState ('');
    const [crm, setCrm] = useState('');
    const [estado, setEstado] = useState('');
    const [especialidade, setEspecialidade] = useState('');
    const [especialidade1, setEspecialidade1] = useState('');

    return (
        <ScrollView style={{flex:1}}>
            <View style={Style.container}>
                <View style={Style.box}>

                    <View style= {Style.nome}> 
                        <Text style={Style.titleText}>Nome completo*</Text>
                        <View style={Style.boxInput}>
                            <TextInput 
                                style={Style.input}
                            />
                        </View>
                    </View>

                    <View style= {Style.sexo}>
                        <Text style={Style.titleText}>Sexo*</Text>
                        <View style={Style.radioGroup}>
                            <RadioButton 
                            label="Masculino" selected={sexo === 'Masculino'}
                            onPress={() => setSexo('Masculino')} 
                            />
                            <RadioButton label="Feminino" 
                            selected={sexo === 'Feminino'} 
                            onPress={() => setSexo('Feminino')} 
                            />
                        </View>    
                    </View>

                    <View style= {Style.cpf}>
                        <Text style={Style.titleText}>CPF*</Text>
                        <View style={Style.boxInput}>
                            <TextInputMask type={'cpf'} value={cpf} 
                            onChangeText={text => setCpf(text)} 
                            style={Style.input} 
                            placeholder="000.000.000-00"
                            />
                        </View>
                    </View>

                    <View style= {Style.endereco}>
                        <Text style={Style.titleText}>Endereço*</Text>
                        <View style={Style.boxInput}>
                            <TextInput 
                                style={Style.input}
                            />
                        </View>
                    </View>

                    <View style= {Style.dataN}>
                        <Text style={Style.titleText}>Data de nascimento*</Text>
                        <View style={Style.boxInput}>
                            <TextInputMask type={'datetime'} options={{ 
                                format: 'DD/MM/YYYY' }} 
                            value={dataNascimento} 
                            onChangeText={text => setDataNascimento(text)} 
                            style={Style.input} 
                            placeholder="DD/MM/AAAA"
                            />
                        </View>
                    </View>


                    <View style= {Style.telefone}>
                        <Text style={Style.titleText}>Telefone*</Text>
                        <View style={Style.boxInput}>
                            <TextInputMask type={'cel-phone'} 
                            options={{ 
                                maskType: 'BRL', 
                                withDDD: true, 
                                dddMask: '(99) ' 
                            }} 
                            value={telefone} 
                            onChangeText={text => setTelefone(text)} 
                            style={Style.input} 
                            placeholder="(99) 99999-9999"
                            />
                        </View>
                    </View>


                    <View style= {Style.email}>
                        <Text style={Style.titleText}>E-mail</Text>
                        <View style={Style.boxInput}>
                            <TextInput 
                            style={Style.input} 
                            value={email} 
                            onChangeText={setEmail} 
                            placeholder="exemplo@email.com" 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                            />
                        </View>
                    </View>

                    <View style= {Style.crm}>
                        <Text style={Style.titleText}>CRM*</Text>
                        <View style={Style.row}>
                        <View style={Style.inputGroup}>
                            <TextInputMask 
                            type={'custom'} 
                            options={{
                                mask: '99999-AA' }} 
                                value={crm} 
                                onChangeText={text => setCrm(text)} 
                                style={[Style.input, Style.boxInputLL]} 
                                placeholder="12345-AB"
                            />
                        </View>
                        </View>
                    </View>

                    <View style= {Style.especialidadeu}>
                        <Text style={Style.titleText}>Especialidade n°1</Text>
                        <View style={Style.row}>
                        <View style={Style.inputGroup}>
                        <View style={Style.boxInput}>
                            <TextInput
                                value={especialidade} 
                                onChangeText={setEspecialidade} 
                                style={Style.input} 
                                placeholder="Psiquiatria"
                                
                            />
                        </View>
                        </View>
                    </View>
                    </View>  

                    <View style= {Style.especialidaded}>
                        <Text style={Style.titleText}>Especialidade n°2</Text>
                        <View style={Style.row}>
                        <View style={Style.inputGroup}>
                        <View style={Style.boxInput}>
                            <TextInput
                                value={especialidade1} 
                                onChangeText={text => setEspecialidade1(text)} 
                                style={Style.input} 
                                placeholder="Neurologia"
                                
                            />
                        </View>
                        </View>
                    </View>
                    </View>

                    <View style={Style.boxBotton}>
                        <TouchableOpacity 
                        style={Style.botton} 
                        onPress={handleClose}
                        >
                            <Text style={Style.textBotton}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={Style.bottonDelete} 
                        onPress={handleClose}
                        >
                            <Text style={Style.textBotton}>Deletar</Text>
                        </TouchableOpacity>
                    </View>

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
    inputText:{
    fontWeight: 'bold',
    fontSize: 12
    },
    radioButtonContainer: { 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20 
    }, 
    radioButton: {
        height: 20, 
        width: 20, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#000', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginRight: 10 
    }, 
    radioButtonSelected: { 
        borderColor: '#000', 
    },
    radioButtonInner: { 
        height: 10, 
        width: 10, 
        borderRadius: 5, 
        backgroundColor: '#000' 
    }, 
    radioButtonText: { 
        fontWeight: 'bold',
        fontSize: 16, 
        color: '#000' 
    }, 
    input: { 
        height: '100%',
        width: '90%',
        borderRadius: 10
    },
    boxInput:{
       width: '100%',
       height: 40,
       borderWidth:1,
       borderRadius: 10,
       marginTop: 10,
       flexDirection: "row",
       alignItems: 'center',
       paddingHorizontal: 10
    },
    boxInputL:{
        width: '80%',
        height: 40,
        borderWidth:1,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0
     },
     boxInputLL:{
        width: '30%',
        height: 40,
        borderWidth:1,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0,
     },
    radioGroup:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    nome:{
        height: 90,
        width:'100%'
    },
    sexo:{
        height: 90,
        width:'100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    endereco:{
        height: 90,
        width:'100%'
    },
    dataN:{
        height: 90,
        width:'100%'
    },
    cpf:{
        height: 90,
        width:'100%'
    },
    telefone:{
        height: 90,
        width:'100%'
    },
    email:{
        height: 90,
        width:'100%'
    },
    crm:{
        height: 105,
        width:'100%',
    },
    especialidadeu:{
        height: 105,
        width:'100%',
    },
    especialidaded:{
        height: 145,
        width:'100%'
    }, 
    row: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%',
        marginVertical: -5 
    }, 
    inputGroup: { 
        flex: 1, 
        marginHorizontal: 0,
        marginVertical: 10
    },
    boxBotton:{
        height:100,
        width:'100%',
        alignItems: 'center'
    },
    botton:{
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor:'#89CA5B',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    textBotton:{
        fontSize:16,
        color: 'white',
        fontWeight: 'bold',

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