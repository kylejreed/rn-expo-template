import TestModal from "@components/modals/TestModal"
import { NavigationContainer } from "@react-navigation/native"
import { AppNavigator } from "@routes/AppNavigator"

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
      <TestModal />
    </NavigationContainer>
  )
}

export default App
