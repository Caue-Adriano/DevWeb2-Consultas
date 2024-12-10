import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import { useState } from "react";
import { ActionModal } from "./actionModal";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Modal
} from 'react-native';

export default function ViewPaciente(){

    const DATA = [
        {
          nome: "Cauê de Freitas Adriano",
          sexo: "Masculino",
          cpf: "572.345.876-40"
        },
        {
          nome: "Aline Nunes",
          sexo: "Feminino",
          cpf: "572.345.876-40"
        },
    ];

    const [visibleModal, setVisibleModal] = useState(false);
    
    return (
        <View style={Style.container}>
                <View style={Style.lista}>
                    <FlashList
                    data={DATA}
                    renderItem={({ item }) => 
                        <TouchableOpacity style={Style.box} onPress={ () => setVisibleModal(true)}>
                            <View style={Style.boxL}>
                                <View style={Style.boxLUP}>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.nome}</Text>
                                    <Text style={Style.textGray}>{item.sexo}</Text>
                                </View>
                                <View style={Style.boxLDown}>
                                    <Text style={Style.textGray}>CPF</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.cpf}</Text>
                                </View>
                            </View>
                            <View style={Style.boxR}>
                                <View style={Style.boxRUP}>
                                    <Text style={Style.text}>ID</Text>
                                </View>
                            </View>
                        </TouchableOpacity>        
                    }
                    estimatedItemSize={200}
                    />
                </View>


                <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={ () => setVisibleModal(false)}
                >
                    <ActionModal
                    handleClose={() => setVisibleModal(false)}
                    />
                </Modal>
        </View>
    )
}