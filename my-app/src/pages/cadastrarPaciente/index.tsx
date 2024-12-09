import React, { useState } from "react"; 
import { useNavigation, NavigationProp } from '@react-navigation/native';
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

import { Style } from "./styles";

const RadioButton = ({ label, selected, onPress }) => (
    <TouchableOpacity onPress={onPress} style={Style.radioButtonContainer}>
        <View style={[Style.radioButton, selected && Style.radioButtonSelected]}>
            {selected && <View style={Style.radioButtonInner} />}
        </View>
        <Text style={Style.radioButtonText}>{label}</Text>
    </TouchableOpacity>
);

export default function CadastrarPaciente() {
    const [nome, setNome] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation<NavigationProp<any>>();

    const handleSubmit = async () => {
        // Validação simples
        if (!nome || !sexo || !cpf || !endereco || !dataNascimento || !telefone) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            // Convertendo a data de nascimento para o formato ISO 8601
            const [day, month, year] = dataNascimento.split('/');
            if (!day || !month || !year || isNaN(new Date(`${year}-${month}-${day}`).getTime())) {
                Alert.alert('Erro', 'Data de nascimento inválida.');
                return;
            }
            const formattedDate = `${year}-${month}-${day}T00:00:00Z`;

            const response = await axios.post('http://192.168.0.6:4000/paciente', {
                nome,
                sexo: sexo === 'Masculino' ? 0 : 1, 
                cpf,
                endereco,
                data_nascimento: formattedDate,
                telefone,
                email,
            });

            if (response.status === 201) {
                Alert.alert('Sucesso', 'Cadastro salvo com sucesso');
                navigation.navigate("homepage");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            Alert.alert('Erro', 'Falha ao salvar cadastro');
        }
    };

    return (
        <ScrollView style={Style.containerScroll}>
            <View style={Style.container}>
                <View style={Style.box}>

                    <View style={Style.nome}>
                        <Text style={Style.titleText}>Nome completo*</Text>
                        <View style={Style.boxInput}>
                            <TextInput
                                style={Style.input}
                                value={nome}
                                onChangeText={setNome}
                            />
                        </View>
                    </View>

                    <View style={Style.sexo}>
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

                    <View style={Style.cpf}>
                        <Text style={Style.titleText}>CPF*</Text>
                        <View style={Style.boxInput}>
                            <TextInputMask type={'cpf'} value={cpf}
                                onChangeText={text => setCpf(text)}
                                style={Style.input}
                                placeholder="000.000.000-00"
                            />
                        </View>
                    </View>

                    <View style={Style.endereco}>
                        <Text style={Style.titleText}>Endereço*</Text>
                        <View style={Style.boxInput}>
                            <TextInput
                                style={Style.input}
                                value={endereco}
                                onChangeText={setEndereco}
                            />
                        </View>
                    </View>

                    <View style={Style.dataN}>
                        <Text style={Style.titleText}>Data de nascimento*</Text>
                        <View style={Style.boxInput}>
                            <TextInputMask type={'datetime'} options={{
                                format: 'DD/MM/YYYY'
                            }}
                                value={dataNascimento}
                                onChangeText={text => setDataNascimento(text)}
                                style={Style.input}
                                placeholder="DD/MM/AAAA"
                            />
                        </View>
                    </View>

                    <View style={Style.telefone}>
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

                    <View style={Style.email}>
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
                        <TouchableOpacity style={Style.botton} onPress={handleSubmit}>
                            <Text style={Style.textBotton}>Salvar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}
