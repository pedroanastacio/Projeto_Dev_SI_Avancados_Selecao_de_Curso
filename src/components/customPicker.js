import React, {Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';

class CustomPicker extends Component {
       
    render() {
        let lista = this.props.listaItens.map((valor, id) => {
            return <Picker.Item key={id} value={id} label={valor.descricao} />
        })

        return (
            <View style={styles.container}>
                <Text> {this.props.label} </Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={this.props.valorSelecionado}
                        onValueChange={(itemValue) => {
                            this.props.formikAction(this.props.field, itemValue)
                            this.props.action(itemValue)   
                        }}
                    >
                        <Picker.Item value='' label={`Selecione o ${ this.props.field}`} />
                        {lista}
                    </Picker>
                </View>
            </View>
        );
    }
}    

const styles = StyleSheet.create({
    container: {
        minWidth: 200,
        marginTop: 10
    }, 
    pickerContainer: {
        height: 45,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#154c79',
        justifyContent: 'center',
        marginTop: 5
    }   
    
});

export default CustomPicker;