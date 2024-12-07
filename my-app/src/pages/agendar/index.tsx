import React from "react";
import { useState } from "react";
import { Style } from "./styles";
import { TextInputMask } from 'react-native-masked-text';
import { Picker } from '@react-native-picker/picker'

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default function Agendar(){
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');

    return (
        <View style={Style.container}>
            <ScrollView style={Style.containerScroll}>
                <View style={Style.box}>
                    
                    <Text style={Style.titleText}>Nome Completo</Text>
                    <TextInput style={Style.inputBox}></TextInput>

                    <Text style={Style.titleText}>Médico</Text>
                    <TextInput style={Style.inputBox}></TextInput>

                    <Text style={Style.titleText}>Data</Text>
                    <View style={Style.inputBox}>
                            <TextInputMask type={'datetime'} options={{ 
                                format: 'DD/MM/YYYY' }}
                            value={data}
                            onChangeText={text => setData(text)}
                            placeholder="DD/MM/AAAA"
                            />
                    </View>

                    <Text style={Style.titleText}>Horário</Text>
                    <View style={Style.inputBox}>
                            <TextInputMask type={'datetime'} options={{ 
                                format: 'HH:MM' }}
                            value={hora}
                            onChangeText={text => setHora(text)}
                            placeholder="--:--"
                            />
                    </View>

                    <TouchableOpacity style={Style.saveButton}>
                        <Text style={Style.saveText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        

        
    )
}