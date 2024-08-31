import { createStackNavigator } from "@react-navigation/stack";
import MoviesHome from "../components/screens/MoviesHome";
import MovieDetails from "../components/screens/MovieDetails";
import { routes } from "../utils/routes";
import MyDrawer from "./DrawerNavigation";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={MyDrawer} />
      <Stack.Screen name={routes.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
}

export default MyStack;
