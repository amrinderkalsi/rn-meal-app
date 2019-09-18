import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    ImageBackground
} from "react-native";

const MealItem = ({ item, onSelectMeal }) => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: item.imageUrl }} style={styles.bgImage} resizeMode="cover">
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{item.duration}m</Text>
                        <Text>{item.complexity.toUpperCase()}</Text>
                        <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default MealItem;
