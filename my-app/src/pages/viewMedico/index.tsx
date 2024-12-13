import React, { useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import { useState } from "react";
import { ActionModal } from "./actionModal";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import axios from "axios";

import {
    Text,
    View,
    StatusBar,
    Modal,
    TouchableOpacity
} from 'react-native';
import { Backend } from "../../../App";

type doctorList = {
    id: number,
    nome: string,
    sexo: number,
    crm: string,
    especialidade_1: string,
    especialidade_2: string
}

type Doctor = {
    id: number,
    nome: string,
    sexo: number,
    cpf: string,
    telefone: string,
    endereco: string,
    data_nascimento: string,
    email: string,
    crm: string,
    uf: string,
    especialidade_1: string,
    especialidade_2: string
}

export default function ViewMedico(){

    const [data, setData] = useState<doctorList[]>([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>();
    const [refresh, setRefresh] = useState(false)
    const navigation = useNavigation<NavigationProp<any>>();

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


    useEffect(()=>{
        fetchData()
    },[])
    
    useEffect(() => {
        fetchData();
     }, [refresh]);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${Backend}/medico/list`);
            setData(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
        }
    };

    const handleOpenModal = (id:number) => {
        setSelectedId(id);
        setVisibleModal(true);
    };

    const handleCloseModal = () => {
        setVisibleModal(false);
        setRefresh(!refresh)
        setSelectedId(null);
    };

    return (
        <View style={Style.container}>
                <View style={Style.lista}>
                    <FlashList
                        data={data}
                        renderItem={({ item }) => {
                             console
                            return(
                        <TouchableOpacity style={Style.box} onPress={() => handleOpenModal(item.id)}>
                            <View style={Style.boxL}>
                                <View style={Style.boxLUP}>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.nome}</Text>
                                    <Text style={Style.textGray}>{item.sexo==0? "Masculino":"Feminino"}</Text>
                                </View>
                                <View style={Style.boxLDown}>
                                    <Text style={Style.textGray}>CRM</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.crm}</Text>
                                </View>
                            </View>
                            <View style={Style.boxR}>
                                <View style={Style.boxRUP}>
                                    <Text style={Style.text}>ID</Text>
                                    <Text style={Style.textGray}>{item.id}</Text>
                                </View>
                                <View style={Style.boxRDown}>
                                    <Text style={Style.textGray}>Especialidades:</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.especialidade_1}</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.especialidade_2}</Text>
                                </View>
                                
                            </View>
                            
                        </TouchableOpacity>
                    )}}
                    estimatedItemSize={200}
                    />
                </View>
                <TouchableOpacity style={Style.homeButton} onPress={() => navigation.navigate("homepage")}>
                    <Text style={Style.homeText}>Home</Text>
                </TouchableOpacity>

                <Modal
                visible={visibleModal}
                transparent={true}
                onRequestClose={ () => setVisibleModal(false)}
                >
                    <TouchableOpacity
                        style={{backgroundColor: '#00000076',
                            flex: 1,
                            justifyContent: 'center',
                            paddingTop: 30,
                        }}
                        activeOpacity={1}
                        // onPressOut={() => handleCloseModal()}
                    >
                        <ActionModal
                        id={selectedId}
                        handleClose={() => handleCloseModal()}
                        />
                    </TouchableOpacity>
                </Modal>
        </View>
    )
}