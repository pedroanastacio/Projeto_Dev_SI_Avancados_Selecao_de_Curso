import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class ErrorValidationMessage extends Component {
    
    render() {
        return(
            <Text style={styles.texto}>
                {this.props.message}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 11,
        color: 'red'
    }
})

export default ErrorValidationMessage;