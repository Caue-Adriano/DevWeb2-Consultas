import React from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";

import {
    Text,
    View,
    StatusBar
} from 'react-native';

export default function ViewConsulta(){

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

    return (
        <View style={Style.container}>
                <View style={Style.lista}>
                    <FlashList
                    data={DATA}
                    renderItem={({ item }) => 
                        <View style={Style.box}>
                            <View style={Style.boxL}>
                                <View style={Style.boxLUP}>
                                    <Text style={Style.text}>{item.nome}</Text>
                                    <Text style={Style.textGray}>{item.sexo}</Text>
                                </View>
                                <View style={Style.boxLDown}>
                                    <Text style={Style.textGray}>CRM</Text>
                                    <Text style={Style.text}>{item.crm}</Text>
                                </View>
                            </View>
                            <View style={Style.boxR}>
                                <View style={Style.boxRUP}>
                                    <Text style={Style.text}>ID</Text>
                                </View>
                                <View style={Style.boxRDown}>
                                    <Text style={Style.textGray}>Especialidades:</Text>
                                    <Text style={Style.text}>Geriatra</Text>
                                    <Text style={Style.text}>Cardiologista</Text>
                                </View>
                                
                            </View>
                            
                        </View>
                    }
                    estimatedItemSize={200}
                    />
                </View>
        </View>
    )
}