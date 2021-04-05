import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class SuccessSubmit extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Ionicons name="md-checkmark-circle-outline" size={45} color="#04c731" />
                <Text style={styles.texto}>
                   {this.props.message}
                </Text>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 30
    },
    texto: {
        fontSize: 25,
        color: '#8e918f',

    }
})

export default SuccessSubmit;