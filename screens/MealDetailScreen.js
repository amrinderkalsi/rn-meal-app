import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = ({navigation}) => {
    const mealId = navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
}

MealDetailScreen.navigationOptions = ({navigation}) => {
    const mealId = navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
      headerTitle: selectedMeal.title,
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("Mark as favorite");
            }}
          />
        </HeaderButtons>
      )
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;