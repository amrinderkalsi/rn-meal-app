import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
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

export default createAppContainer(MealNavigator);
