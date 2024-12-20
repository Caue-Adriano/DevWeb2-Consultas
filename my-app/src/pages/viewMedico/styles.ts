import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
        paddingVertical:50,
        backgroundColor: '#89CA5B'
    },
    lista:{
        width:'100%',
        height:'100%'
    },
    box:{
        backgroundColor:'white',
        width:'100%',
        height:'auto',
        marginBottom: 20,
        borderRadius: 16,
        padding: 20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    boxL:{
        // backgroundColor:'red',
        width: 200,
        height:'auto',
    },
    boxR:{
        // backgroundColor:'red',
        width: 100,
        height: 50
    },
    boxLUP:{
        // backgroundColor:'blue',
        width:'100%',
        height:'auto',
    },
    boxLDown:{
        // backgroundColor:'yellow',
        width:'100%',
        height:'auto',
        marginTop: 10
    },
    boxRUP:{
        // backgroundColor:'blue',
        width:'100%',
        height:'auto'
    },
    boxRDown:{
        // backgroundColor:'yellow',
        width:'100%',
        height:'auto',
        
    },
    text:{
        fontWeight: 'bold',
        fontSize: 16
    },
    textGray:{
        fontWeight: 'bold',
        fontSize: 12,
        color:'#7E7E7E'
    },
    homeButton:{
        width: 100,
        height: 39,
        backgroundColor:'white',
        borderRadius: 10,
        marginTop: -50,
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
     homeText:{
         fontWeight:'bold',
         fontSize: 16,
         color:'black',
         textAlign:'center'
     }
})