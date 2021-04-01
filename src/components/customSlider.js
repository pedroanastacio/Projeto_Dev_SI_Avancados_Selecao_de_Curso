import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Slider from '@react-native-community/slider';

class CustomSlider extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text> {this.props.titulo} </Text>
                <View style={styles.sliderContainer}>
                <Slider
                    style={styles.slider}
                    thumbTintColor='#154c79'
                    maximumTrackTintColor="##ff5916"
                    maximumValue={this.props.valorMax}
                    minimumValue={this.props.valorMin}
                    onValueChange={(valorSelecionado) => this.props.action(valorSelecionado)}
                />
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        justifyContent: 'center',
       
    },
    sliderContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider: {
        marginTop: 10,
        width: 200,
        height: 20
    }
})


export default CustomSlider;
