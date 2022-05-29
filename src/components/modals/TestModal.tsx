import { View, Text, Modal, Button, SafeAreaView } from "react-native"
import React from "react"
import { useModal } from "@stores/modals"

const TestModal = () => {
  const { activeModal, close } = useModal()
  const isOpen = activeModal === "test"
  return (
    <Modal visible={isOpen} presentationStyle="pageSheet" animationType="slide">
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View>
          <Button title="Tap to dismiss" onPress={close} />
        </View>
      </SafeAreaView>
    </Modal>
  )
}

export default TestModal
