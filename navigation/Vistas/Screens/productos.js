import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const ProductosView = (props) => {
    return(
        <View style={styles.container} backgroundColor="#ffffff">
            <Button title="Agregar producto" onPress={ () => props.navigation.navigate("productos_add")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttons: {
        flex: 1,
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ProductosView;