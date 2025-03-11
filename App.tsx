import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ReadingScreen from "./screens/ReadingScreen";
import GalleryScreen from "./screens/GalleryScreen";
import MusicScreen from "./screens/MusicScreen";
import ContactScreen from "./screens/ContactScreen";

export type RootStackParamList = {
  Home: undefined;
  Reading: undefined;
  Gallery: undefined;
  Music: undefined;
  Contact: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined}
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Reading" component={ReadingScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;