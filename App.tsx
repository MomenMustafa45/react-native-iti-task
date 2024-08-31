import { SafeAreaView } from "react-native";
import Home from "./components/screens/Home";
import Contacts from "./components/screens/Contacts";
import TodoScreen from "./components/screens/TodoScreen";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./navigation/StackNavigation";

const App = () => {
  return (
    <SafeAreaView className="flex-1 mt-10">
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
