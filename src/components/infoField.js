import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class InfoField extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.infoLabel}>
                    {`${this.props.label}:`}
                    <Text style={styles.infoValue}> {this.props.info} </Text>
                </Text>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    infoLabel: {
        fontWeight: 'bold',
        marginVertical: 8,
        marginRight: 30
    },
    infoValue: {
        fontWeight: 'normal',
    }
})

export default InfoField;