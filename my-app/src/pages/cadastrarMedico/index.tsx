import React, { useState } from "react"; 
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker';


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
    
    export default function CadastrarMedico() { 
        const [sexo, setSexo] = useState('');
        const [cpf, setCpf] = useState('');
        const [dataNascimento, setDataNascimento] = useState('');
        const [telefone, setTelefone] = useState('');
        const [email, setEmail] = useState ('');
        const [crm, setCrm] = useState('');
        const [estado, setEstado] = useState('');
        const [rqe, setRqe] = useState('');
        const [rqe1, setRqe1] = useState('');
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
              
                <View style= {Style.crm}>
                    <Text style={Style.titleText}>CRM</Text>
                    <View style={Style.row}>
                    <View style={Style.inputGroup}>
                        <Text style={Style.subtitleText}>N°</Text>
                        <TextInputMask 
                        type={'custom'} 
                        options={{
                             mask: '9999999' }} 
                             value={crm} 
                             onChangeText={text => setCrm(text)} 
                             style={[Style.input, Style.boxInputL]} 
                            placeholder="1234567"
                        />
                    </View>
                    <View style={Style.inputGroup}>
                        <Text style={Style.subtitleText}>Estado</Text>
                    <Picker 
                    selectedValue={estado} 
                    onValueChange={(itemValue) => setEstado(itemValue)} 
                    style={[Style.input, Style.boxInputLEstado]} > 
                    <Picker.Item label="Selecione um estado" value="" /> 
                    <Picker.Item label="Acre" value="AC" /> 
                    <Picker.Item label="Alagoas" value="AL" /> 
                    <Picker.Item label="Amapá" value="AP" /> 
                    <Picker.Item label="Amazonas" value="AM" /> 
                    <Picker.Item label="Bahia" value="BA" /> 
                    <Picker.Item label="Ceará" value="CE" /> 
                    <Picker.Item label="Distrito Federal" value="DF" /> 
                    <Picker.Item label="Espírito Santo" value="ES" /> 
                    <Picker.Item label="Goiás" value="GO" /> 
                    <Picker.Item label="Maranhão" value="MA" /> 
                    <Picker.Item label="Mato Grosso" value="MT" /> 
                    <Picker.Item label="Mato Grosso do Sul" value="MS" /> 
                    <Picker.Item label="Minas Gerais" value="MG" /> 
                    <Picker.Item label="Pará" value="PA" /> 
                    <Picker.Item label="Paraíba" value="PB" /> 
                    <Picker.Item label="Paraná" value="PR" /> 
                    <Picker.Item label="Pernambuco" value="PE" /> 
                    <Picker.Item label="Piauí" value="PI" /> 
                    <Picker.Item label="Rio de Janeiro" value="RJ" /> 
                    <Picker.Item label="Rio Grande do Norte" value="RN" /> 
                    <Picker.Item label="Rio Grande do Sul" value="RS" /> 
                    <Picker.Item label="Rondônia" value="RO" /> 
                    <Picker.Item label="Roraima" value="RR" /> 
                    <Picker.Item label="Santa Catarina" value="SC" /> 
                    <Picker.Item label="São Paulo" value="SP" /> 
                    <Picker.Item label="Sergipe" value="SE" /> 
                    <Picker.Item label="Tocantins" value="TO" /> 
                    </Picker>
                    </View>  
                    </View>
                </View>

                <View style= {Style.rqeu}>
                    <Text style={Style.titleText}>RQE n°1</Text>
                    <View style={Style.row}>
                    <View style={Style.inputGroup}>
                        <Text style={Style.subtitleText}>N°</Text>
                    <View style={Style.boxInputLL}>
                        <TextInputMask 
                            type={'only-numbers'} 
                            value={rqe} 
                            onChangeText={text => setRqe(text)} 
                            style={Style.input} 
                            placeholder="1234"
                            
                        />
                    </View>
                    </View>
                </View>
                </View>  

                <View style= {Style.rqed}>
                    <Text style={Style.titleText}>RQE n°2</Text>
                    <View style={Style.row}>
                    <View style={Style.inputGroup}>
                        <Text style={Style.subtitleText}>N°</Text>
                    <View style={Style.boxInputLL}>
                        <TextInputMask 
                            type={'only-numbers'} 
                            value={rqe1} 
                            onChangeText={text => setRqe1(text)} 
                            style={Style.input} 
                            placeholder="1234"
                            
                        />
                    </View>
                    </View>
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