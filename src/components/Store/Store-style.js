import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'gainsboro',
        margin: 10,
        borderRadius: 8,
        flex: 1,
    },

    image_container: {
        margin: 10,
    },

    image: {
        height: Dimensions.get('screen').height / 4,
        borderRadius: 10,
    },
    
    inner_container: {
        margin: 10,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    price: {
        color: 'gray',
        fontSize: 15,
        fontWeight: 'bold',
    },

    inStock: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'crimson',
    }
})