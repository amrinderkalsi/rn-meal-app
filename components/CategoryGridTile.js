import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = ({ title, onSelect, color }) => {

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={onSelect}>
                <View style={{...styles.item, backgroundColor: color}}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.26,
        elevation: 5
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

export default CategoryGridTile;