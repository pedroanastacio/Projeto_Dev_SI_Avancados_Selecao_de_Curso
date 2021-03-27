import React, {Component } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';

class CustomPicker extends Component {
       
    render() {
        let lista = this.props.listaItens.map((valor, id) => {
            return <Picker.Item key={id} value={id} label={valor.descricao} />
        })

        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.props.valorSelecionado}
                    onValueChange={(itemValue) => this.props.action(itemValue)}
                >
                    {lista}
                </Picker>
            </View>
        );
    }
}    

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10,
        padding: 0,
        height: 45,
        justifyContent: 'center'
    },    
    
});

export default CustomPicker;