import { StyleSheet } from "react-native";



export const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        backgroundColor: '#89CA5B',
        height: 912
    },
    box:{
        height: 800,
        backgroundColor:'white',
        width:'100%',
        borderRadius: 10,
        padding: 20
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    subtitleText:{
        fontWeight: 'bold',
        fontSize: 12
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
        height: 110,
        width:'100%'
    },
    boxBotton:{
        height:100,
        width:'100%',
        alignItems: 'center',
       justifyContent: 'center'
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