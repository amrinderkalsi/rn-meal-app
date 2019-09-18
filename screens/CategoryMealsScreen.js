import React from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ navigation }) => {

    const renderMealList = ({ item }) => {
      return <MealItem item={item} onSelectMeal={() => {
            navigation.navigate({
                routeName: 'MealDetail',
                params: {
                    mealId: item.id
                }
            })  
        }} />;
    };

    const catId = navigation.getParam('catrgoryId');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealList}
                style={{ width: '100%' }} />

        </View>
    );
}

// CategoryMealsScreen.navigationOptions = ({navigationData}) => {
//     const catId = navigationData.navigation.getParam('catrgoryId');

//     const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

//     return {
//         headerTitle: selectedCategory.title
//     };
// };


// used destructuring mode for navigation
CategoryMealsScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('catrgoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;