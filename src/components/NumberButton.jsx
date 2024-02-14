import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const NumberButton = ({ number, onPress, customStyle }) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...customStyle }} onPress={onPress}>
            <View >
                <Text variant='headlineSmall' >
                    {number}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fee3b7',
        paddingHorizontal: 20,
        width: '25%',
        height: '100%',
        paddingVertical: 45,
    },
    text: {
    }
});

export default NumberButton;