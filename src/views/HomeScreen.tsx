import { View, Text } from "react-native"
import React from "react"
import { useStore } from "@stores"

const HomeScreen = () => {
  const { hello } = useStore()
  return (
    <View>
      <Text>Hello {hello}</Text>
    </View>
  )
}

export default HomeScreen
