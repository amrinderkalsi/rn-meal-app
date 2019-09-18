import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritiesScreen from "../screens/FavouritesScreen";
import Colors from "../constants/Colors";

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontFamily: "open-sans",
        fontWeight: "400"
      }
    }
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  },
  Favorites: {
    screen: FavouritiesScreen,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(
      tabScreenConfig,
      {
        activeColor: Colors.accentColor,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      }
    )
    : createBottomTabNavigator(
      tabScreenConfig,
      {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          style: {
            backgroundColor: Colors.primaryColor
          }
        }
      }
    );

export default createAppContainer(MealsTabNavigator);
