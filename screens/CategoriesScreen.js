import React from 'react';
import { Text, View, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() => {
            navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    catrgoryId: itemData.item.id
                }
            })
        }} />;
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
            keyExtractor={(item, index) => item.id}
        />
    );
}

// Navigation options
// CategoriesScreen.navigationOptions = {
//     headerTitle: 'Meals Categories'
// };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;