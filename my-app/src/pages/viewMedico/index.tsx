import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import { useState } from "react";
import { ActionModal } from "./actionModal";

import {
    Text,
    View,
    StatusBar,
    Modal,
    TouchableOpacity
} from 'react-native';

export default function ViewMedico(){

    const DATA = [
        {
          nome: "Cauê de Freitas Adriano",
          sexo: "Masculino",
          crm: "5742 - SC"
        },
        {
          nome: "Aline Nunes",
          sexo: "Feminino",
          crm: "9999 - SC"
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
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.nome}</Text>
                                    <Text style={Style.textGray}>{item.sexo}</Text>
                                </View>
                                <View style={Style.boxLDown}>
                                    <Text style={Style.textGray}>CRM</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.crm}</Text>
                                </View>
                            </View>
                            <View style={Style.boxR}>
                                <View style={Style.boxRUP}>
                                    <Text style={Style.text}>ID</Text>
                                </View>
                                <View style={Style.boxRDown}>
                                    <Text style={Style.textGray}>Especialidades:</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">Geriatra</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">Cardiologista</Text>
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