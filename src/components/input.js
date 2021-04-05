import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

class Input extends Component {
    
    render() {
        return(
            <View style={styles.container}>
                <Text> {this.props.label} </Text>
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.action}
                    value={this.props.value}
                    keyboardType={this.props.tipoTeclado}
                />
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minWidth: 200,
        marginTop: 10
    },
    input: {
        padding: 7,
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 5,
        borderColor: '#154c79'
    }
})

export default Input;