import React, { useEffect } from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import { useState } from "react";
import { ActionModal } from "./actionModal";
import { useNavigation, NavigationProp } from '@react-navigation/native';

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Modal
} from 'react-native';
import axios from "axios";
import { Backend } from "../../../App";

type pacienteList={
    id: number,
    nome: string,
    sexo: number,
    telefone: string,
    cpf: string
}

type pacienteProps={
    id: number,
    nome: string,
    sexo: number,
    cpf: string,
    telefone: string,
    endereco: string,
    data_nascimento: string,
    email: string
}

export default function ViewPaciente(){

    const [data, setData] = useState<pacienteList[]>([]);
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>();
    const [refresh, setRefresh] = useState(false)
    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(()=>{
        fetchData()
    },[])
    
    useEffect(() => {
        fetchData();
     }, [refresh]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${Backend}/paciente/list`);
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
                    renderItem={({ item }) => 
                        <TouchableOpacity style={Style.box} onPress={ () => handleOpenModal(item.id)}>
                            <View style={Style.boxL}>
                                <View style={Style.boxLUP}>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.nome}</Text>
                                    <Text style={Style.textGray}>{item.sexo==0? "Masculino":"Feminino"}</Text>
                                </View>
                                <View style={Style.boxLDown}>
                                    <Text style={Style.textGray}>CPF</Text>
                                    <Text style={Style.text} numberOfLines={1} ellipsizeMode="tail">{item.cpf}</Text>
                                </View>
                            </View>
                            <View style={Style.boxR}>
                                <View style={Style.boxRUP}>
                                    <Text style={Style.text}>ID</Text>
                                    <Text style={Style.textGray}>{item.id}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>        
                    }
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