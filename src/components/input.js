import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class Input extends Component {
    
    render() {
        return(
            <View>
                <TextInput 
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.action}
                    keyboardType={this.props.tipoTeclado}
                />
             </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 7,
        borderWidth: 1,
        width: 300,
        borderRadius: 3,
        marginTop: 10
    }
})

export default Input;