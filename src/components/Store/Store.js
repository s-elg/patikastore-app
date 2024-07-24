import React from "react";
import {View, Text,Image} from 'react-native';

import styles from './Store-style';

const Store = ({product}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.image_container}>
                <Image style = {styles.image} source={{uri: product.imgURL}} resizeMode = "stretch"/>
            </View>
            <View style = {styles.inner_container}>
                <Text style = {styles.title}>{product.title}</Text>
                <Text style = {styles.price}>{product.price}</Text>
                {
                    !product.inStock && (
                        <Text style={styles.inStock}>STOKTA YOK</Text>
                    )
                }
            </View>
        </View>
    );
};


export default Store;