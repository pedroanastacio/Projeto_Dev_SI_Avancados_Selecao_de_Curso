import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Modal } from 'react-native';

class LoadingModal extends Component {
    
    render() {
        return(
            <Modal
                animationType="fade"
                visible={this.props.modalVisible}
                transparent={true}
            >
                    <View style={styles.indicatorContainer}>
                        <ActivityIndicator size="large" color="#ff5916" />
                    </View>
            </Modal>
           
            
        );
    }
}

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        backgroundColor: '#fff',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    }    
})

export default LoadingModal;