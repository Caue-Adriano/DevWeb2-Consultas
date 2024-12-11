import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import axios from "axios";
import { Backend } from "../../../App";
import {ActionModal} from './ActionModal';
import {
    Text,
    View,
    Modal,
    TouchableOpacity
} from 'react-native';

export default function ViewConsulta() {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${Backend}/consulta/list`);
                setData(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados: ", error);
            }
        };

        fetchData();
    }, []);

    const handleOpenModal = (id) => {
        setSelectedId(id);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedId(null);
    };

    return (
        <View style={Style.container}>
            <View style={Style.lista}>
                <FlashList
                    data={data}
                    renderItem={({ item }) => {
                        const dataObj = new Date(item.data_consulta);
                        const data = dataObj.toLocaleDateString('pt-BR'); 
                        const hora = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo'}); 
                        return (
                            <TouchableOpacity onPress={() => handleOpenModal(item.id)}>
                                <View style={Style.box}>
                                    <View style={Style.boxL}>
                                        <View style={Style.boxLUP}>
                                            <Text style={Style.text}>Paciente: {item.paciente_id}</Text>
                                            <Text style={Style.textGray}>Médico: {item.doctor_id}</Text>
                                        </View>
                                        <View style={Style.boxLDown}>
                                            <Text style={Style.textGray}>Data</Text>
                                            <Text style={Style.text}>{data}</Text>
                                        </View>
                                    </View>
                                    <View style={Style.boxR}>
                                        <View style={Style.boxRUP}>
                                            <Text style={Style.text}>ID: {item.id}</Text>
                                        </View>
                                        <View style={Style.boxRDown}>
                                            <Text style={Style.textGray}>Horário:</Text>
                                            <Text style={Style.text}>{hora}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    estimatedItemSize={200}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <ActionModal handleClose={handleCloseModal} id={selectedId} />
            </Modal>
        </View>
    );
}
