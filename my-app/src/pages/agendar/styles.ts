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
        height:'auto',
        backgroundColor:'white',
        width:'100%',
        borderRadius: 10,
        padding: 20,
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start"
    },
    titleText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    inputBox:{
        width:'100%',
        backgroundColor:'white',
        borderRadius: 10,
        borderColor:'#a4a4a4',
        borderWidth: 1,
        marginBottom: 20
    },
    saveButton:{
       width: 100,
       height: 39,
       backgroundColor:'#89CA5B',
       borderRadius: 10,
       display:'flex',
       justifyContent:'center',
       alignContent:'center',

       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    saveText:{
        fontWeight:'bold',
        fontSize: 16,
        color:'white',
        textAlign:'center'
    },
    containerScroll: { 
        flex: 1,
    }
})