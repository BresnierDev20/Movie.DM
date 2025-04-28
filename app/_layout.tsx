import { View, Text } from "react-native"
import { nowPlayingAction } from "@/core/action/movie/now.playing.action";
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import '../global.css'; 

const MainLayout = () => {
  const queryClient = new QueryClient()

  return (
    <GestureHandlerRootView>
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </QueryClientProvider>
  </GestureHandlerRootView>
  )
}

export default MainLayout;