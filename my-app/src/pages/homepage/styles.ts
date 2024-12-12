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
        height: 634,
        backgroundColor:'white',
        width:'100%',
        borderRadius: 10,
        padding: 20
    },
    agendar:{
        height: 200,
        width:'100%'
    },
    cadastrar:{
        height: 200,
        width:'100%'
    },
    visualizar:{
        height: 200,
        width:'100%'
    },
    title:{
        height: 38,
        //backgroundColor: 'brown',
        width:'100%',
        borderBottomColor: '#000000',
        borderBottomWidth: 2
    },
    boxButtons:{
        height: 162,
        //backgroundColor: 'teal',
        width:'100%',
        padding: 20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 27
    },
    buttons:{
        height: 119,
        width: 100,
        borderRadius: 10,
        borderColor: '#a4a4a4',
        borderWidth: 1,
        alignContent: 'space-between',
        display:'flex',
        justifyContent:'center',
        margin:8,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    buttonsText:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:'center'
    }
})