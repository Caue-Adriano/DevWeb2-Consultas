import React, { useState } from "react"; 
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';


import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { Style } from "./styles";


    const RadioButton = ({ label, selected, onPress }) => 
        ( <TouchableOpacity onPress={onPress} style={Style.radioButtonContainer}> 
        <View style={[Style.radioButton, selected && Style.radioButtonSelected]}> 
            {selected && <View style={Style.radioButtonInner} />} 
            </View> 
            <Text style={Style.radioButtonText}>{label}</Text> 
            </TouchableOpacity> 
    );
    
    export default function CadastrarPaciente() { 
        const [sexo, setSexo] = useState('');
        const [cpf, setCpf] = useState('');
        const [dataNascimento, setDataNascimento] = useState('');
        const [telefone, setTelefone] = useState('');
        const [email, setEmail] = useState ('');
        const navigation = useNavigation<NavigationProp<any>>();
    return (
        <ScrollView style={Style.containerScroll}>
        <View style={Style.container}>
            <View style={Style.box}>

                <View style= {Style.nome}> 
                    <Text style={Style.titleText}>Nome completo</Text>
                    <View style={Style.boxInput}>
                        <TextInput 
                            style={Style.input}
                        />
                    </View>
                </View>

                <View style= {Style.sexo}>
                    <Text style={Style.titleText}>Sexo</Text>
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
                    <Text style={Style.titleText}>CPF</Text>
                    <View style={Style.boxInput}>
                        <TextInputMask type={'cpf'} value={cpf} 
                        onChangeText={text => setCpf(text)} 
                        style={Style.input} 
                        placeholder="000.000.000-00"
                        />
                    </View>
                </View>

                <View style= {Style.endereco}>
                    <Text style={Style.titleText}>Endereço</Text>
                    <View style={Style.boxInput}>
                        <TextInput 
                            style={Style.input}
                        />
                    </View>
                </View>

                <View style= {Style.dataN}>
                    <Text style={Style.titleText}>Data de nascimento</Text>
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
                    <Text style={Style.titleText}>Telefone</Text>
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
                <View style={Style.boxBotton}>
                    <TouchableOpacity style={Style.botton} onPress={() => navigation.navigate("homepage")}>
                        <Text style={Style.textBotton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
        </ScrollView>
    )
}