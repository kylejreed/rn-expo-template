import { View, Text, Button } from "react-native"
import React from "react"
import { useStore } from "@stores"
import { useModal } from "@stores/modals"

const HomeScreen = () => {
  const { hello } = useStore()
  const open = useModal((s) => s.open)
  return (
    <View>
      <Text>Hello {hello}</Text>
      <Button title="Show modal" onPress={() => open("test")} />
    </View>
  )
}

export default HomeScreen
