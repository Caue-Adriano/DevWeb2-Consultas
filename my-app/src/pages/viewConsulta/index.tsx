import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { Style } from "./styles";
import axios from "axios";
import { Backend } from "../../../App";
import { ActionModal } from "./actionModal";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {
    Text,
    View,
    Modal,
    TouchableOpacity
} from 'react-native';

type consulta = {
    data_consulta:Date,
    doctor_id:number,
    paciente_id:number,
    id:number
}

export default function ViewConsulta() {
    const [data, setData] = useState<consulta[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>();
    const [refresh, setRefresh] = useState(false)
    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
       fetchData();
    }, []);

    useEffect(() => {
        fetchData();
     }, [refresh]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${Backend}/consulta/list`);
            setData(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
        }
    };
    const handleOpenModal = (id:number) => {
        setSelectedId(id);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setRefresh(!refresh)
        setSelectedId(null);
    };

    return (
        <View style={Style.container}>
            <View style={Style.lista}>
                <FlashList
                    data={data}
                    renderItem={({ item }) => {
                        const dataObj = item.data_consulta.toString();
                        const dataUnformated = dataObj.split("T")[0].split("-")
                        const data =  `${dataUnformated[2]}/${dataUnformated[1]}/${dataUnformated[0]}`
                        console.log(dataObj.split("T")[1])
                        const horaUnformated = dataObj.split("T")[1].split(':')
                        const hora = `${horaUnformated[0].toString()}:${horaUnformated[1].toString()}`; 
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
            <TouchableOpacity style={Style.homeButton} onPress={() => navigation.navigate("homepage")}>
                    <Text style={Style.homeText}>Home</Text>
                </TouchableOpacity>
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
