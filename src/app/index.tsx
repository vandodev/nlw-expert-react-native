import {View, Text, StyleSheet} from "react-native"
export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Olá mundo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})