import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

class BtnSubmit extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.btn}
                    onPress={this.props.action}
                >
                    <Text style={styles.texto}> {this.props.btnText} </Text>
                </TouchableOpacity>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        padding: 10,
        backgroundColor: '#154c79',
        width: 250,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default BtnSubmit;