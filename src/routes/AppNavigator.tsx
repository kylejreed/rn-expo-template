import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "@views/HomeScreen"

const Stack = createNativeStackNavigator()

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
