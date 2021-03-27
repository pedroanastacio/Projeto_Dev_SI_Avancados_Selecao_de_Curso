import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class Logo extends Component {
    
    render() {
        return(
            <View>
              <Image 
                style={styles.logo}
                source={require('../../assets/unipam_logo.png')}
              />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50
    }
})

export default Logo;