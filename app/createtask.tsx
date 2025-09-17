import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="w-full flex-1 justify-center px-4">
        <Text className="text-3xl font-bold mb-8 text-center text-black">
          Add New Task
        </Text>
        
        <View className="space-y-6 w-full">
          <TextInput
            className="w-full h-[50px] bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-base"
            placeholder="Title needed"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#666"
          />

          <TextInput
            className="w-full h-[50px] bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-base"
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            placeholderTextColor="#666"
          />

          <TextInput
            className="w-full h-[50px] bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-base"
            placeholder="Status"
            value={status}
            onChangeText={setStatus}
            placeholderTextColor="#666"
          />

          <View className="mt-6">
            <Button
              title="Create Task"
              onPress={() => {
                Alert.alert('Task Created', `Title: ${title}\nDescription: ${description}\nStatus: ${status}`);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CreateTask