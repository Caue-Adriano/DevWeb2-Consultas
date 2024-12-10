import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import { ActionModal } from "./actionModal";
import { useState } from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Modal
} from 'react-native';

export default function ViewConsulta(){

    const DATA = [
        {
          nomePaciente: "Cauê de Freitas Adriano",
          nomeMedico: "Dr. Luiz Oliveira",
          data: "05/01/2025",
          hora: "14:30"
        },
        {
          nomePaciente: "Aline Nunes",
          nomeMedico: "Dr. Luiz Oliveira",
          data: "05/01/2025",
          hora: "14:35"
        },
      ];
    
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View style={Style.container}>
                <View style={Style.lista}>
                    <FlashList
                    data={DATA}
                    renderItem={({ item }) => 
                        <TouchableOpacity style={Style.box} onPress={() => setVisibleModal(true)}>
                            <View style={Style.boxL}>
                                <View style={Style.boxLUP}>
                                    <Text style={Style.text}>{item.nomePaciente}</Text>
                                    <Text style={Style.textGray}>{item.nomeMedico}</Text>
                                </View>
                                <View style={Style.boxLDown}>
                                    <Text style={Style.textGray}>Data</Text>
                                    <Text style={Style.text}>{item.data}</Text>
                                </View>
                            </View>
                            <View style={Style.boxR}>
                                <View style={Style.boxRUP}>
                                    <Text style={Style.text}>ID</Text>
                                </View>
                                <View style={Style.boxRDown}>
                                    <Text style={Style.textGray}>Horário:</Text>
                                    <Text style={Style.text}>{item.hora}</Text>
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