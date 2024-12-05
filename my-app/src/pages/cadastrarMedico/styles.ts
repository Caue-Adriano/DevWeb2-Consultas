import { StyleSheet } from "react-native";



export const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor: '#89CA5B'
    },
    box:{
        height: 1100,
        backgroundColor:'white',
        width:'100%',
        borderRadius: 10,
        padding: 20
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    inputText:{
    fontWeight: 'bold',
    fontSize: 12
    },
    radioButtonContainer: { 
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20 
    }, 
    radioButton: {
        height: 20, 
        width: 20, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#000', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginRight: 10 
    }, 
    radioButtonSelected: { 
        borderColor: '#000', 
    },
    radioButtonInner: { 
        height: 10, 
        width: 10, 
        borderRadius: 5, 
        backgroundColor: '#000' 
    }, 
    radioButtonText: { 
        fontWeight: 'bold',
        fontSize: 16, 
        color: '#000' 
    }, 
    input: { 
        height: '100%',
        width: '90%',
        borderRadius: 10
    },
    boxInput:{
       width: '100%',
       height: 40,
       borderWidth:1,
       borderRadius: 10,
       marginTop: 10,
       flexDirection: "row",
       alignItems: 'center',
       paddingHorizontal: 10
    },
    boxInputL:{
        width: '80%',
        height: 40,
        borderWidth:1,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0
     },
     boxInputLL:{
        width: '30%',
        height: 40,
        borderWidth:1,
        borderRadius: 10,
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0,
     },
    radioGroup:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    nome:{
        height: 90,
        width:'100%'
    },
    sexo:{
        height: 90,
        width:'100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    endereco:{
        height: 90,
        width:'100%'
    },
    dataN:{
        height: 90,
        width:'100%'
    },
    cpf:{
        height: 90,
        width:'100%'
    },
    telefone:{
        height: 90,
        width:'100%'
    },
    email:{
        height: 90,
        width:'100%'
    },
    crm:{
        height: 105,
        width:'100%',
    },
    especialidadeu:{
        height: 105,
        width:'100%',
    },
    especialidaded:{
        height: 145,
        width:'100%'
    }, 
    row: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%',
        marginVertical: -5 
    }, 
    inputGroup: { 
        flex: 1, 
        marginHorizontal: 0,
        marginVertical: 10
    },
    boxBotton:{
        height:100,
        width:'100%',
        alignItems: 'center'
    },
    botton:{
        width: 100,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor:'#89CA5B',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    textBotton:{
        fontSize:16,
        color: 'white',
        fontWeight: 'bold',

    },
    containerScroll: { 
        flex: 1
    }


})